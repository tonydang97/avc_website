import React from 'react'
import HeroSection from "../components/Transfert/HeroSection/HeroSection"
import InfoSection from "../components/InfoSection"
import Listings from '../components/Transfert/Listings'
import Features from '../components/Transfert/Features'
import ContactZone from '../components/ContactZone/ContactZone'
import { InfoTransfertSer, InfoTransfertNum, InfoTransfertDTF } from '../components/InfoData'
import TableauComparatif from '../components/Transfert/TableauTransfert'


const list = [
  {technique: "Transfert numérique", Qualité: "3 étoiles"},
  {technique: "Transfert sérigraphique", Qualité: "Élevée", Tenu:"Bonne", Choix:"Large", Prix:"Moyen"},
  {technique: "Transfert DTF", Qualité: "3 étoiles"},
]

const colNames = ['Technique', 'Qualité', 'Tenu dans le temps', 'Choix de coloris', 'Prix' ]


function Transfert() {
  return (
    <div>
      <HeroSection />
      <InfoSection {...InfoTransfertSer}/>
      <InfoSection {...InfoTransfertNum} />
      <InfoSection {...InfoTransfertDTF}/>

      <TableauComparatif list={list} colNames={colNames} />
      <Features />
      <Listings />
      <ContactZone />

    </div>
  )
}

export default Transfert