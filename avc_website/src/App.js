import React, { useEffect } from 'react'
import Header from './components/Header/Header'
import "./App.css"
// import Footer from './components/Footer/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Broderie from './pages/Broderie'
import Serigraphie from './pages/Serigraphie'
import Transfert from './pages/Transfert'
import Sublimation from './pages/Sublimation'
import Signaletique from './pages/Signaletique'
import PageNotFound from "./pages/PageNotFound"
import Infographie from "./pages/Infographie"
import NewFooter from './components/Footer/NewFooter'
import Aos from "aos"
import 'aos/dist/aos.css'
import ScrollToTop from './components/ScrollToTop'
import FAQ from './components/FAQ/FAQ'
import Mention from "./components/Mention/Mention"

 
  
const App = () => {

 useEffect(() => {
    Aos.init({})
  }, [])

  return (
    <>
    <Router>
      <ScrollToTop />
      <Header />
        <Routes>
      {/* <Presentation />
      <Technique />
      <Exemple />
      <Testimonial /> */}
          <Route exact path="/" element ={<Home />}/>
          <Route exact path="/contact" element={<Contact />}/>
          <Route exact path="/serigraphie" element={<Serigraphie />}/>
          <Route exact path="/broderie" element={<Broderie />}/>
          <Route exact path="/transferts" element={<Transfert />}/>
          <Route exact path="/infographie" element={<Infographie />} />
          <Route exact path="/sublimation" element={<Sublimation />}/>
          <Route exact path="/signaletique" element={<Signaletique />}/>
          <Route exact path="/faq" element={<FAQ />} />
          <Route exact path="/mention-legales" element ={<Mention />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      {/* <Footer /> */}
      <NewFooter />
    </Router>
    </>
  )
}

export default App