import React from 'react'
import HeroSection from "../components/Broderie/HeroSection/HeroSection"
import { InfoData, InfoDataTwo } from "../components/Broderie/InfoData"
import InfoSection from "../components/Broderie/InfoSection"
import InfoSectionReverse from "../components/Broderie/InfoSectionReverse"
import Listings from '../components/Broderie/Listings'
import Features from '../components/Broderie/Features'
import ContactZone from '../components/ContactZone/ContactZone'




function Broderie() {
  return (
    <>
      <HeroSection />
      <InfoSection {...InfoData}/>
      <InfoSectionReverse {...InfoDataTwo} />
      {/* <Features /> */}
      {/* <Listings /> */}
      <ContactZone />
      
    </>
  )
}

export default Broderie