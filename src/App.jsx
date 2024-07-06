
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
import { Helmet } from 'react-helmet';
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
      <Helmet>
        <meta charSet="utf-8" />
        <title>ALHOSN FINANCING BROKER</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="ALHOSN FINANCING BROKER - Your trusted financial partner" />
        <meta name="keywords" content="financing, broker, ALHOSN, financial services" />
        <meta name="author" content="ALHOSN FINANCING BROKER" />
        <meta property="og:title" content="ALHOSN FINANCING BROKER" />
        <meta property="og:description" content="Your trusted financial partner" />
        <meta property="og:image" content="http://mysite.com/image.jpg" />
        <meta property="og:url" content="http://mysite.com" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
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
