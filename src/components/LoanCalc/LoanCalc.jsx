/* eslint-disable react/prop-types */

import "./LoanCalc.css";
import Home from "../../assets/images/mortgage-svgrepo-com.svg";
import Money from "../../assets/images//dollar-finance-money-20-svgrepo-com.svg";
import Car from "../../assets/images/mobile-dollar-svgrepo-com.svg";
import Select from "react-select";
import { useState } from "react";
import translations from "../../translations.json";
import { Helmet } from "react-helmet";

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

  const handlePropertyValueChange = (e) =>
    setPropertyValue(Number(e.target.value));
  const handleFinanceAmountChange = (e) =>
    setFinanceAmount(Number(e.target.value));
  const handleTenorChange = (selectedOption) => setTenor(selectedOption.value);

  const calculateResults = () => {
    let downPayment, numberOfPayments, monthlyPayment, resultAmount;

    switch (selectedLoanType) {
      case "home":
        downPayment = financeAmount * 0.2;
        numberOfPayments = tenor * 12;
        monthlyPayment = (financeAmount - downPayment) / numberOfPayments;
        break;

      case "personal":
        numberOfPayments = tenor * 12;
        resultAmount = financeAmount + financeAmount * 0.12;
        monthlyPayment = resultAmount / numberOfPayments;
        downPayment = 0; // No down payment for personal loans
        break;

      case "automobile":
        numberOfPayments = tenor * 12;
        resultAmount = financeAmount + financeAmount * 0.5;
        monthlyPayment = resultAmount / numberOfPayments;
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

  const tenors = [
    { value: 5, label: "5" },
    { value: 6, label: "6" },
    { value: 7, label: "7" },
    { value: 8, label: "8" },
    { value: 10, label: "10" },
    { value: 15, label: "15" },
    { value: 16, label: "16" },
    { value: 17, label: "30" },
    { value: 20, label: "20" },
    { value: 25, label: "25" },
    { value: 30, label: "30" },
  ];

  const renderLoanCalcContent = () => {
    switch (selectedLoanType) {
      case "home":
        return (
          <>
            {/* 
        ==================================
                Helmet
        ==================================
      */}
            <Helmet>
              <title>
                {translations[language].loanCalculator} | ALHOSN FINANCING
                BROKER
              </title>
              <meta
                name="description"
                content={`${translations[language].estimateYourMortgage}. ${translations[language].unlockMortgage}`}
              />
              <meta
                name="keywords"
                content="loan calculator, mortgage calculator, finance amount, property value, ALHOSN FINANCING BROKER"
              />
              <link
                rel="canonical"
                href="https://yourdomain.com/loan-calculator"
              />
              <meta
                property="og:title"
                content={`${translations[language].loanCalculator} | ALHOSN FINANCING BROKER`}
              />
              <meta
                property="og:description"
                content={`${translations[language].estimateYourMortgage}. ${translations[language].unlockMortgage}`}
              />
              <meta
                property="og:url"
                content="https://yourdomain.com/loan-calculator"
              />
              <meta property="og:type" content="website" />
              <script type="application/ld+json">
                {`
            {
              "@context": "http://schema.org",
              "@type": "WebApplication",
              "name": "${translations[language].loanCalculator}",
              "description": "${translations[language].estimateYourMortgage}. ${translations[language].unlockMortgage}",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": "0"
              },
              "provider": {
                "@type": "Organization",
                "name": "ALHOSN FINANCING BROKER"
              }
            }
          `}
              </script>
            </Helmet>
            {/* 
        ==================================
               end Helmet
        ==================================
      */}
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
                  options={tenors}
                  defaultValue={tenors.find((option) => option.value === 25)}
                  onChange={handleTenorChange}
                />
              </div>
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
                  defaultValue={tenors.find((option) => option.value === 25)}
                  onChange={handleTenorChange}
                />
              </div>
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
                  defaultValue={tenors.find((option) => option.value === 25)}
                  onChange={handleTenorChange}
                />
              </div>
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
            <a href="#" onClick={() => setSelectedLoanType("home")}>
              <span>
                <img src={Home} alt="Home Finance" />
              </span>
              {translations[language].homeFinance}
            </a>
            <a href="#" onClick={() => setSelectedLoanType("personal")}>
              <span>
                <img src={Money} alt="Personal Loan" />
              </span>
              {translations[language].personalLoan}
            </a>
            <a href="#" onClick={() => setSelectedLoanType("automobile")}>
              <span>
                <img src={Car} alt="Automobile Loan" />
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
