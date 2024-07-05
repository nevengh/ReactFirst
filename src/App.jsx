
import './App.css'
import Navbar from './components/NavBar/NavBar'
import Slider from './components/Slider/Slider'
import AboutUs from './pages/About Us/AboutUs'
import ServicesPage from './pages/ServicesPage/ServicesPage'
import Partner from './pages/Partner/Partner'
import Contact from './pages/Contact/ContactUs'
import Footer from './components/Footer/Footer'
import LoanCalc from './components/LoanCalc/LoanCalc'
import { useEffect, useState } from 'react'
function App() {
  const [language, setLanguage] = useState('en');
// Determine text direction based on language
const direction = language === 'ar' ? 'rtl' : 'ltr';

// Update body class for direction
useEffect(() => {
  document.body.dir = direction;
}, [direction]);
  return (
    <div className={`app ${direction}`}>
      <Navbar language={language} setLanguage={setLanguage} />
      <Slider language={language}/>
      <AboutUs language={language}/>
      <ServicesPage language={language}/>
      <LoanCalc language={language}/>
      <Partner language={language}/>
      <Contact language={language}/>
      <Footer language={language}/>
    </div>
  )
}

export default App
