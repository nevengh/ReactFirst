/* eslint-disable react/prop-types */
import "./LoanCalc.css";
import Home from "../../assets/images/home-care-icon.svg";
import automobile from "../../assets/images/sports-car-icon.svg";
import personal from "../../assets/images/sponsorship-icon.svg";
import Select from "react-select";
import { useState } from "react";
import translations from "../../translations.json";

const LoanCalc = ({ language }) => {
  const [propertyValue, setPropertyValue] = useState(0);
  const [financeAmount, setFinanceAmount] = useState(0);
  const [tenor, setTenor] = useState(25);
  const [selectedLoanType, setSelectedLoanType] = useState("home");
  const [results, setResults] = useState({
    downPayment: 0,
    numberOfPayments: 0,
    monthlyPayment: 0,
    financeAmount: 0,
    tenor: 0,
  });
  const [interestRate, setInterestRate] = useState(0.05); // Add interest rate state

  const handlePropertyValueChange = (e) =>
    setPropertyValue(Number(e.target.value));
  const handleFinanceAmountChange = (e) =>
    setFinanceAmount(Number(e.target.value));
  const handleTenorChange = (selectedOption) => setTenor(selectedOption.value);
  const handleInterestRateChange = (e) =>
    setInterestRate(Number(e.target.value)); // Add handler for interest rate change

  const pmt = (rate, nper, pv) => {
    if (rate === 0) return -pv / nper;
    const pvif = Math.pow(1 + rate, nper);
    const pmt = rate / (pvif - 1) * -(pv * pvif);
    return pmt;
  };

  const calculateResults = () => {
    let downPayment, numberOfPayments, monthlyPayment;

    const monthlyRate = ((1 + interestRate) ** (1 / 12)) - 1; // Calculate the monthly rate

    switch (selectedLoanType) {
      case "home":
        downPayment = financeAmount * 0.2;
        numberOfPayments = tenor * 12;
        monthlyPayment = pmt(monthlyRate, numberOfPayments, -(propertyValue - downPayment));
        break;

      case "personal":
        numberOfPayments = tenor * 12;
        monthlyPayment = pmt(monthlyRate, numberOfPayments, -financeAmount);
        downPayment = 0; // No down payment for personal loans
        break;

      case "automobile":
        numberOfPayments = tenor * 12;
        monthlyPayment = pmt(monthlyRate, numberOfPayments, -financeAmount);
        downPayment = 0; // No down payment for automobile loans
        break;

      default:
        break;
    }

    setResults({
      downPayment: downPayment.toFixed(2),
      numberOfPayments: numberOfPayments,
      monthlyPayment: monthlyPayment.toFixed(2),
      financeAmount: financeAmount,
      tenor: tenor,
    });
  };

  const HomeTenors = [
    { value: 1, label: "1" },
    { value: 2, label: "2" },
    { value: 3, label: "3" },
    { value: 4, label: "4" },
    { value: 5, label: "5" },
    { value: 6, label: "6" },
    { value: 7, label: "7" },
    { value: 8, label: "8" },
    { value: 9, label: "9" },
    { value: 10, label: "10" },
    { value: 11, label: "11" },
    { value: 12, label: "12" },
    { value: 13, label: "13" },
    { value: 14, label: "14" },
    { value: 15, label: "15" },
    { value: 16, label: "16" },
    { value: 17, label: "17" },
    { value: 18, label: "18" },
    { value: 19, label: "19" },
    { value: 20, label: "20" },
    { value: 21, label: "21" },
    { value: 22, label: "22" },
    { value: 23, label: "23" },
    { value: 24, label: "24" },
    { value: 25, label: "25" },
  ];
  const tenors = [
    { value: 1, label: "1" },
    { value: 2, label: "2" },
    { value: 3, label: "3" },
    { value: 4, label: "4" },
    { value: 5, label: "5" },
  ];

  const renderLoanCalcContent = () => {
    switch (selectedLoanType) {
      case "home":
        return (
          <>
            <h2 className="left_title">
              {translations[language].estimateYourMortgage}
            </h2>
            <form action="">
              <div className="input_group">
                <label htmlFor="property_value">
                  {translations[language].propertyValue}
                </label>
                <input
                  type="text"
                  id="property_value"
                  value={propertyValue}
                  onChange={handlePropertyValueChange}
                  placeholder="AED 0.00"
                />
              </div>
              <div className="input_group">
                <label htmlFor="Finance">
                  {translations[language].financeAmount}
                </label>
                <input
                  type="text"
                  id="Finance"
                  value={financeAmount}
                  onChange={handleFinanceAmountChange}
                  placeholder="AED 0.00"
                />
              </div>
              <div className="input_group">
                <label htmlFor="Tenor">
                  {translations[language].tenorInYears}
                </label>
                <Select
                  options={HomeTenors}
                  defaultValue={HomeTenors.find(
                    (option) => option.value === 25
                  )}
                  onChange={handleTenorChange}
                />
              </div>

              <label className="slider-label">
                {translations[language].interestRate}
                <input
                  type="range"
                  min="0.01"
                  max="0.1"
                  step="0.01"
                  value={interestRate}
                  onChange={handleInterestRateChange}
                  className="range"
                />
                <span className="rate_value">{(interestRate * 100).toFixed(2)}%</span>
              </label>
            </form>
            <button className="estimate-button" onClick={calculateResults}>
              {translations[language].estimateMortgage}
            </button>
            <h3 className="left_text">
              {translations[language].unlockMortgage}
            </h3>
          </>
        );

      case "personal":
        return (
          <>
            <h2 className="left_title">
              {translations[language].estimateYourPersonal}
            </h2>
            <form action="">
              <div className="input_group">
                <label htmlFor="Finance">
                  {translations[language].financeAmount}
                </label>
                <input
                  type="text"
                  id="Finance"
                  value={financeAmount}
                  onChange={handleFinanceAmountChange}
                  placeholder="AED 0.00"
                />
              </div>
              <div className="input_group">
                <label htmlFor="Tenor">
                  {translations[language].tenorInYears}
                </label>
                <Select
                  options={tenors}
                  defaultValue={tenors.find((option) => option.value === 5)}
                  onChange={handleTenorChange}
                />
              </div>

              <label className="slider-label">
                {translations[language].interestRate}
                <input
                  type="range"
                  min="0.01"
                  max="0.1"
                  step="0.01"
                  value={interestRate}
                  onChange={handleInterestRateChange}
                  className="range"
                />
                <span className="rate_value">{(interestRate * 100).toFixed(2)}%</span>
              </label>
            </form>
            <button className="estimate-button" onClick={calculateResults}>
              {translations[language].estimateLoan}
            </button>
            <h3 className="left_text">
              {translations[language].unlockMortgage}
            </h3>
          </>
        );

      case "automobile":
        return (
          <>
            <h2 className="left_title">
              {translations[language].estimateYourAutomobile}
            </h2>
            <form action="">
              <div className="input_group">
                <label htmlFor="Finance">
                  {translations[language].financeAmount}
                </label>
                <input
                  type="text"
                  id="Finance"
                  value={financeAmount}
                  onChange={handleFinanceAmountChange}
                  placeholder="AED 0.00"
                />
              </div>
              <div className="input_group">
                <label htmlFor="Tenor">
                  {translations[language].tenorInYears}
                </label>
                <Select
                  options={tenors}
                  defaultValue={tenors.find((option) => option.value === 5)}
                  onChange={handleTenorChange}
                />
              </div>

              <label className="slider-label">
                {translations[language].interestRate}
                <input
                  type="range"
                  min="0.01"
                  max="0.1"
                  step="0.01"
                  value={interestRate}
                  onChange={handleInterestRateChange}
                  className="range"
                />
                <span className="rate_value">{(interestRate * 100).toFixed(2)}%</span>
              </label>
            </form>
            <button className="estimate-button" onClick={calculateResults}>
              {translations[language].estimateLoan}
            </button>
            <h3 className="left_text">
              {translations[language].unlockMortgage}
            </h3>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="LoanCalc">
      <h1>{translations[language].loanCalculator}</h1>
      <div className="LoanCalc-container main-container">
        <div className="LoanCalc_links_box">
          <div className="LoanCalc_links">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setSelectedLoanType("home");
              }}
            >
              <span>
                <img src={Home} alt="Home Finance" />
              </span>
              {translations[language].homeFinance}
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setSelectedLoanType("personal");
              }}
            >
              <span>
                <img src={personal} alt="Personal Loan" />
              </span>
              {translations[language].personalLoan}
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setSelectedLoanType("automobile");
              }}
            >
              <span>
                <img src={automobile} alt="Automobile Loan" />
              </span>
              {translations[language].automobileLoans}
            </a>
          </div>
        </div>
        <div className="LoanCalc_content_box">
          <div className="LoanCalc_content_box-left">
            {renderLoanCalcContent()}
          </div>
          <div className="LoanCalc_content_box-right">
            <div>
              <p className="result">{translations[language].result} :</p>
              <ul className="first_ul">
                <li>
                  {translations[language].downPayment}
                  <span>
                    {translations[language].Aed} {results.downPayment}
                  </span>
                </li>
                <li>
                  {translations[language].numberOfPayments}{" "}
                  <span>{results.numberOfPayments}</span>{" "}
                </li>
                <li>
                  {translations[language].monthlyPayment}{" "}
                  <span>
                    {translations[language].Aed} {results.monthlyPayment}
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <ul className="second_ul">
                <li>
                  {translations[language].financeAmount}{" "}
                  <span>
                    {translations[language].Aed} {results.financeAmount}
                  </span>
                </li>
                <li>
                  {translations[language].tenorInYears}{" "}
                  <span>{results.tenor}</span>{" "}
                </li>
              </ul>
              <a href="#contact">
                <button className="apply-button">
                  {translations[language].applyHere}
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanCalc;
