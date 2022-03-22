import React from 'react'
import Header from './components/Header/Header'
import "./App.css"
import Presentation from './components/Presentation/Presentation'
import Technique from './components/Technique/Technique'
import Exemple from './components/Exemple/Exemple'

const App = () => {
  return (
    <>
      <Header />
      <Presentation />
      <Technique />
      <Exemple />
    </>
  )
}

export default App