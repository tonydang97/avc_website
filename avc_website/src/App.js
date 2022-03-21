import React from 'react'
import Header from './components/Header/Header'
import "./App.css"
import Presentation from './components/Presentation/Presentation'
import Technique from './components/Technique/Technique'
// import Creation from './components/Création/Creation'

const App = () => {
  return (
    <>
      <Header />
      <Presentation />
      <Technique />
      {/* <Creation /> */}
    </>
  )
}

export default App