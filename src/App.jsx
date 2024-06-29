
import './App.css'
import Navbar from './components/NavBar/NavBar'
import Slider from './components/Slider/Slider'
import AboutUs from './pages/About Us/AboutUs'
import ServicesPage from './pages/ServicesPage/ServicesPage'
import Partner from './pages/Partner/Partner'
import Contact from './pages/Contact/ContactUs'
import Footer from './components/Footer/Footer'
function App() {
 

  return (
    <>
      <Navbar/>
      <Slider/>
      <AboutUs/>
      <ServicesPage/>
      <Partner/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
