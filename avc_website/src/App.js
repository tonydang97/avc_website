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
          <Route exact path="/games" element={<Histoire />}/>
          <Route exact path="/map" element={<Contact />}/>
        </Routes>
      <Footer />
    </Router>
    </>
  )
}

export default App