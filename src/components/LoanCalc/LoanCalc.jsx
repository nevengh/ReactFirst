import "./LoanCalc.css";
import Home from "../../assets/images/mortgage-svgrepo-com.svg";
import Money from "../../assets/images//dollar-finance-money-20-svgrepo-com.svg";
import Car from "../../assets/images/mobile-dollar-svgrepo-com.svg";
import Select from 'react-select';
import { useState } from "react";

const LoanCalc = () => {
  const [propertyValue, setPropertyValue] = useState(0);
  const [financeAmount, setFinanceAmount] = useState(0);
  const [tenor, setTenor] = useState(25);
  const [selectedLoanType, setSelectedLoanType] = useState('home');
  const [results, setResults] = useState({
    downPayment: 0,
    numberOfPayments: 0,
    monthlyPayment: 0,
    financeAmount: 0,
    tenor: 0,
  });

  const handlePropertyValueChange = (e) => setPropertyValue(Number(e.target.value));
  const handleFinanceAmountChange = (e) => setFinanceAmount(Number(e.target.value));
  const handleTenorChange = (selectedOption) => setTenor(selectedOption.value);

  const calculateResults = () => {
    let downPayment, numberOfPayments, monthlyPayment, resultAmount;

    switch (selectedLoanType) {
      case 'home':
        downPayment = financeAmount * 0.2;
        numberOfPayments = tenor * 12;
        monthlyPayment = (financeAmount - downPayment) / numberOfPayments;
        break;

      case 'personal':
        numberOfPayments = tenor * 12;
        resultAmount = financeAmount + (financeAmount * 0.12);
        monthlyPayment = resultAmount / numberOfPayments;
        downPayment = 0; // No down payment for personal loans
        break;

      case 'automobile':
        numberOfPayments = tenor * 12;
        resultAmount = financeAmount + (financeAmount * 0.5);
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
    { value: 5, label: '5' },
    { value: 6, label: '6' },
    { value: 7, label: '7' },
    { value: 8, label: '8' },
    { value: 10, label: '10' },
    { value: 15, label: '15' },
    { value: 16, label: '16' },
    { value: 17, label: '30' },
    { value: 20, label: '20' },
    { value: 25, label: '25' },
    { value: 30, label: '30' },
  ];

  const renderLoanCalcContent = () => {
    switch (selectedLoanType) {
      case 'home':
        return (
          <>
            <h2 className="left_title">Estimate your mortgage</h2>
            <form action="">
              <div className="input_group">
                <label htmlFor="property_value">Property Value</label>
                <input type="text" id="property_value"
                  value={propertyValue}
                  onChange={handlePropertyValueChange}
                  placeholder="AED 0.00"
                />
              </div>
              <div className="input_group">
                <label htmlFor="Finance">Finance Amount</label>
                <input type="text" id="Finance"
                  value={financeAmount}
                  onChange={handleFinanceAmountChange}
                  placeholder="AED 0.00"
                />
              </div>
              <div className="input_group">
                <label htmlFor="Tenor">Tenor In Years</label>
                <Select
                  options={tenors}
                  defaultValue={tenors.find(option => option.value === 25)}
                  onChange={handleTenorChange}
                />
              </div>
            </form>
            <button className="estimate-button" onClick={calculateResults}>
              ESTIMATE MY MORTGAGE
            </button>
            <h3 className="left_text">
              Unlock the door to your dream home with our tailored mortgage loan solutions. We're here to make your home ownership journey seamless and rewarding. Trust in our expertise and personalized service as we guide you towards the key to your future. Please note, rates may fluctuate depending on the specific bank and its policies. Terms and conditions apply.
            </h3>
          </>
        );

      case 'personal':
        return (
          <>
            <h2 className="left_title">Estimate your personal loan</h2>
            <form action="">
              <div className="input_group">
                <label htmlFor="Finance">Finance Amount</label>
                <input type="text" id="Finance"
                  value={financeAmount}
                  onChange={handleFinanceAmountChange}
                  placeholder="AED 0.00"
                />
              </div>
              <div className="input_group">
                <label htmlFor="Tenor">Tenor In Years</label>
                <Select
                  options={tenors}
                  defaultValue={tenors.find(option => option.value === 25)}
                  onChange={handleTenorChange}
                />
              </div>
            </form>
            <button className="estimate-button" onClick={calculateResults}>
              ESTIMATE MY LOAN
            </button>
            <h3 className="left_text">
              Unlock the door to your dream with our tailored personal loan solutions. We're here to make your journey seamless and rewarding. Trust in our expertise and personalized service as we guide you towards the key to your future. Please note, rates may fluctuate depending on the specific bank and its policies. Terms and conditions apply.
            </h3>
          </>
        );

      case 'automobile':
        return (
          <>
            <h2 className="left_title">Estimate your automobile loan</h2>
            <form action="">
              <div className="input_group">
                <label htmlFor="Finance">Finance Amount</label>
                <input type="text" id="Finance"
                  value={financeAmount}
                  onChange={handleFinanceAmountChange}
                  placeholder="AED 0.00"
                />
              </div>
              <div className="input_group">
                <label htmlFor="Tenor">Tenor In Years</label>
                <Select
                  options={tenors}
                  defaultValue={tenors.find(option => option.value === 25)}
                  onChange={handleTenorChange}
                />
              </div>
            </form>
            <button className="estimate-button" onClick={calculateResults}>
              ESTIMATE MY LOAN
            </button>
            <h3 className="left_text">
              Unlock the door to your dream car with our tailored automobile loan solutions. We're here to make your journey seamless and rewarding. Trust in our expertise and personalized service as we guide you towards the key to your future. Please note, rates may fluctuate depending on the specific bank and its policies. Terms and conditions apply.
            </h3>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="LoanCalc">
      <h1>LOAN CALCULATOR</h1>
      <div className="LoanCalc-container main-container">
        <div className="LoanCalc_links_box">
          <div className="LoanCalc_links">
            <a href="#" onClick={() => setSelectedLoanType('home')}>
              <span>
                <img src={Home} alt="Home Finance" />
              </span>
              HOME FINANCE
            </a>
            <a href="#" onClick={() => setSelectedLoanType('personal')}>
              <span>
                <img src={Money} alt="Personal Loan" />
              </span>
              PERSONAL LOAN
            </a>
            <a href="#" onClick={() => setSelectedLoanType('automobile')}>
              <span>
                <img src={Car} alt="Automobile Loan" />
              </span>
              AUTOMOBILE LOANS
            </a>
          </div>
        </div>
        <div className="LoanCalc_content_box">
          <div className="LoanCalc_content_box-left">
            {renderLoanCalcContent()}
          </div>
          <div className="LoanCalc_content_box-right">
            <p className="result">Result :</p>
            <ul className="first_ul">
              <li>Down Payment<span>AED {results.downPayment}</span></li>
              <li>Number of Payments <span>{results.numberOfPayments}</span> </li>
              <li>Monthly payment <span>AED {results.monthlyPayment}</span></li>
            </ul>
            <ul className="second_ul">
              <li>Finance Amount <span>AED {results.financeAmount}</span></li>
              <li>Tenor In Years <span>{results.tenor}</span> </li>
            </ul>
            <button className="apply-button">APPLY HERE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanCalc;
