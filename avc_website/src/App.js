import React from 'react'
import Header from './components/Header/Header'
import "./App.css"
// import Presentation from './components/Presentation/Presentation'
// import Technique from './components/Technique/Technique'
// import Exemple from './components/Exemple/Exemple'
// import Testimonial from './components/Testimonial/Testimonial'
import Footer from './components/Footer/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import Histoire from "./pages/Histoire"
import Contact from "./pages/Contact"
import Broderie from './pages/Broderie'
import Serigraphie from './pages/Serigraphie'
import Transfert from './pages/Transfert'
import Sublimation from './pages/Sublimation'
import Signaletiques from './pages/Broderie'


const App = () => {
  return (
    <>
    <Router>
      <Header />
        <Routes>
      {/* <Presentation />
      <Technique />
      <Exemple />
      <Testimonial /> */}
          <Route exact path="/" element ={<Home />}/>
          <Route exact path="/histoire" element={<Histoire />}/>
          <Route exact path="/contact" element={<Contact />}/>
          <Route exact path="/serigraphie" element={<Serigraphie />}/>
          <Route exact path="/broderie" element={<Broderie />}/>
          <Route exact path="/transfert" element={<Transfert />}/>
          <Route exact path="/sublimation" element={<Sublimation />}/>
          <Route exact path="/signaletiques" element={<Signaletiques/>}/>
        </Routes>
      <Footer />
    </Router>
    </>
  )
}

export default App