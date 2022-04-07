import React from 'react'
import HeroSection from "../components/HeroSection/HeroSection"
import { SliderDataBroderie } from "../components/SliderData"
import { InfoData, InfoDataTwo } from "../components/InfoData"
import InfoSection from "../components/InfoSection"
import ExempleTechnique from '../components/Exemple/ExempleTechnique'
import ExempleBroderie_data from '../components/Exemple/ExempleBroderie_data'




function Broderie() {
  return (
    <>
      {/* <Hero slides={SliderDataBroderie}/> */}
      <HeroSection />
      <InfoSection {...InfoData}/>
      <InfoSection {...InfoDataTwo} />
      <ExempleTechnique {...ExempleBroderie_data}/>
    </>
  )
}

export default Broderie