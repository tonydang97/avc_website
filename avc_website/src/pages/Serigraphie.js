import React from 'react'
import HeroSection from "../components/Serigraphie/HeroSection/HeroSection"
import { InfoData, InfoDataTwo } from "../components/Serigraphie/InfoData"
import InfoSection from "../components/Serigraphie/InfoSection"
import InfoSectionReverse from "../components/Serigraphie/InfoSectionReverse"
import Listings from '../components/Serigraphie/Listings'
import Features from '../components/Serigraphie/Features'
import ContactZone from '../components/ContactZone/ContactZone'




function Serigraphie() {
  return (
    <>
      <HeroSection />
      <InfoSection {...InfoData}/>
      <InfoSectionReverse {...InfoDataTwo} />
      <Features />
      <Listings />
      <ContactZone />
      
    </>
  )
}

export default Serigraphie