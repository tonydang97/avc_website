import React from "react"
import "./Exemple.css"
import Card from "./Card"
import Exemple_data from "./Exemple_data"

const Exemple = () => {
  return (
    <>
      <section className='Portfolio top' id='portfolio'>
        <div className='container'>
          <div className='heading text-center '>

            <h1>NOS CREATIONS</h1>
          </div>

          <div className='content grid'>
            {Exemple_data.map((value, index) => {
              return <Card 
              key={index} 
              image={value.image} 
              category={value.category} 
              totalLike={value.totalLike} 
              title={value.title} 
              description={value.description}
              />
            })}

            {/*<div className='box btn_shadow '>
              <div className='img'>
                  <img src='https://rainbowit.net/html/inbio/assets/images/portfolio/portfolio-01.jpg' alt='' />
              </div>
              <div className='category d_flex'>
                  <span>Development</span>
                  <label>
                    <i className='far fa-heart'></i> 360
                  </label>
              </div>
              <div className='title'>
                  <h2>Mobile app landing design & Services</h2>
                <a href='' className='arrow'>
                  <i class='fas fa-arrow-right'></i>
                </a>
              </div>
            </div>*/}
          </div>
        </div>
      </section>
    </>
  )
}

export default Exemple