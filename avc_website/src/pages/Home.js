import React from 'react'
import Presentation from '../components/Presentation/Presentation'
import Technique from '../components/Technique/Technique'
import Exemple from '../components/Exemple/Exemple'
import Testimonial from '../components/Testimonial/Testimonial'
import Stats from '../components/Stats/Stats'
import ContactZone from '../components/ContactZone/ContactZone'

const Home = () => {
  return (
    <>
    <Presentation />
    <Technique />
    <Stats />
    <Exemple />
    <Testimonial />
    <ContactZone />
    </>
  )
}

export default Home