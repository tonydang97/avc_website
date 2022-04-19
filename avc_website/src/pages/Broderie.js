import React from 'react'
import HeroSection from "../components/Broderie/HeroSection/HeroSection"
// import { SliderDataBroderie } from "../components/SliderData"
import { InfoData, InfoDataTwo } from "../components/Broderie/InfoData"
import InfoSection from "../components/Broderie/InfoSection"
import InfoSectionReverse from "../components/Broderie/InfoSectionReverse"
// import ExempleTechnique from '../components/Exemple/ExempleTechnique'
// import ExempleBroderie_data from '../components/Exemple/ExempleBroderie_data'
import Listings from '../components/Broderie/Listings'
import Features from '../components/Broderie/Features'
import ContactZone from '../components/ContactZone/ContactZone'




function Broderie() {
  return (
    <>
      {/* <Hero slides={SliderDataBroderie}/> */}
      <HeroSection />
      <InfoSection {...InfoData}/>
      <InfoSectionReverse {...InfoDataTwo} />
      {/* <ExempleTechnique {...ExempleBroderie_data}/> */}
      <Features />
      <Listings />
      <ContactZone />
      
    </>
  )
}

export default Broderie