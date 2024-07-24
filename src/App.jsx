/* eslint-disable react/no-unknown-property */
import { useState, useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet'
import './App.css'
import Navbar from './components/NavBar/NavBar'
import Slider from './components/Slider/Slider'
import AboutUs from './pages/About Us/AboutUs'
import ServicesPage from './pages/ServicesPage/ServicesPage'
import Partner from './pages/Partner/Partner'
import Contact from './pages/Contact/ContactUs'
import Footer from './components/Footer/Footer'
import LoanCalc from './components/LoanCalc/LoanCalc'

function App() {
  const [language, setLanguage] = useState('en');
  const [currentSection, setCurrentSection] = useState('home');
  const direction = language === 'ar' ? 'rtl' : 'ltr';

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const partnerRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    document.body.dir = direction;

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (homeRef.current) observer.observe(homeRef.current);
    if (aboutRef.current) observer.observe(aboutRef.current);
    if (servicesRef.current) observer.observe(servicesRef.current);
    if (partnerRef.current) observer.observe(partnerRef.current);
    if (contactRef.current) observer.observe(contactRef.current);

    return () => {
      if (homeRef.current) observer.unobserve(homeRef.current);
      if (aboutRef.current) observer.unobserve(aboutRef.current);
      if (servicesRef.current) observer.unobserve(servicesRef.current);
      if (partnerRef.current) observer.unobserve(partnerRef.current);
      if (contactRef.current) observer.unobserve(contactRef.current);
    };
  }, [direction]);

  const getMetaData = () => {
    switch(currentSection) {
      case 'home':
        return {
          title: "ALHOSN FINANCIAL BROKER",
          description: "Your trusted financial partner in UAE",
          keywords: "financing, broker, ALHOSN, financial services, UAE",
          url: "https://steady-florentine-5ba0c9.netlify.app",
          image: "https://steady-florentine-5ba0c9.netlify.app/path-to-your-logo.jpg"
        };
      case 'about':
        return {
          title: "About Us | ALHOSN FINANCING BROKER",
          description: "Learn about ALHOSN FINANCING BROKER and our services",
          keywords: "about us, ALHOSN, financial services",
          url: "https://steady-florentine-5ba0c9.netlify.app/about",
          image: "https://steady-florentine-5ba0c9.netlify.app/path-to-your-about-image.jpg"
        };
      case 'services':
        return {
          title: "Services | ALHOSN FINANCING BROKER",
          description: "Explore our financial services",
          keywords: "services, ALHOSN, financial services",
          url: "https://steady-florentine-5ba0c9.netlify.app/services",
          image: "https://steady-florentine-5ba0c9.netlify.app/path-to-your-services-image.jpg"
        };
      case 'partner':
        return {
          title: "Partner | ALHOSN FINANCING BROKER",
          description: "Become a partner with ALHOSN FINANCING BROKER",
          keywords: "partner, ALHOSN, financial services",
          url: "https://steady-florentine-5ba0c9.netlify.app/partner",
          image: "https://steady-florentine-5ba0c9.netlify.app/path-to-your-partner-image.jpg"
        };
      case 'contact':
        return {
          title: "Contact Us | ALHOSN FINANCING BROKER",
          description: "Get in touch with ALHOSN FINANCING BROKER",
          keywords: "contact, ALHOSN, financial services",
          url: "https://steady-florentine-5ba0c9.netlify.app/contact",
          image: "https://steady-florentine-5ba0c9.netlify.app/path-to-your-contact-image.jpg"
        };
      default:
        return {
          title: "ALHOSN FINANCING BROKER",
          description: "Your trusted financial partner in UAE",
          keywords: "financing, broker, ALHOSN, financial services, UAE",
          url: "https://steady-florentine-5ba0c9.netlify.app",
          image: "https://steady-florentine-5ba0c9.netlify.app/path-to-your-logo.jpg"
        };
    }
  };

  const { title, description, keywords, url, image } = getMetaData();

  return (
    <div className={`app ${direction}`}>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="ALHOSN FINANCING BROKER" />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta http-equiv="content-language" content={language === 'ar' ? 'ar' : 'en'} />
        <meta name="robots" content="index, follow" />
        
        <html lang={language} />
      </Helmet>
      
      <Navbar language={language} setLanguage={setLanguage} />
      <div id="home" ref={homeRef}><Slider language={language}/></div>
      <div id="about" ref={aboutRef}><AboutUs language={language}/></div>
      <div id="services" ref={servicesRef}>
        <ServicesPage language={language}/>
        <LoanCalc language={language}/>
      </div>
      <div id="partner" ref={partnerRef}><Partner language={language}/></div>
      <div id="contact" ref={contactRef}><Contact language={language}/></div>
      <Footer language={language}/>
    </div>
  )
}

export default App
