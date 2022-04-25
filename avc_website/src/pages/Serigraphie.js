import React from 'react'
import HeroSection from "../components/Serigraphie/HeroSection/HeroSection"
import InfoSection from "../components/InfoSection"
import Listings from '../components/Serigraphie/Listings'
import Features from '../components/Serigraphie/Features'
import ContactZone from '../components/ContactZone/ContactZone'
import Avantages from "../components/Serigraphie/Avantages/Avantages"
import { InfoSerigraphie1, InfoSerigraphie2 } from '../components/InfoData'




function Serigraphie() {
  return (
    <>
      <HeroSection />
      <InfoSection {...InfoSerigraphie1}/>
      <InfoSection {...InfoSerigraphie2} />
      <Avantages />
      <Features />
      <Listings />
      <ContactZone />
      
    </>
  )
}

export default Serigraphie