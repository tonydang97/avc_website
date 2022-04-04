import React from "react"
import "../Presentation/Presentation.css"
import hero from "../../images/pexels1.jpeg"
import { Typewriter } from "react-simple-typewriter"
// import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"


const Presentation = () => {

  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            <h3>BIENVENUE</h3>
            <h1>
              Chez <span>A VOS COULEURS</span>
            </h1>
            <h2>
              Une société
              <span>
                <Typewriter words={[" pour vos clients.", " fiable.", " de confiance.", " de qualité."]} 
                loop 
                cursor 
                cursorStyle='|' 
                typeSpeed={70} 
                deleteSpeed={50} 
                delaySpeed={1000} />
              </span>
            </h2>

            <p>Depuis 29 ans nous accompagnons professionnels dans leurs projets de marquage textile.
                Riches de plusieurs années d’expérience dans la sérigraphie, la broderie, le transfert et la sublimation nous vous orienterons vers 
                les produits et procédés d’impression les plus adaptés à vos besoins.</p>
            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>TROUVEZ NOUS</h4>
                <div className='button'>
                  <button className='btn_shadow'>
                    <i class='fab fa-facebook-f'></i>
                  </button>
                  <button className='btn_shadow'>
                    <i class='fab fa-instagram'></i>
                  </button>
                  <button className='btn_shadow'>
                    <i class='fab fa-linkedin-in'></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='right_img'>
              <img src={hero} alt='' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Presentation