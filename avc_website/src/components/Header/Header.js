import React, { useState } from "react"
import "./Header.css"
// import logo from "../../images/logoAVC.png"


const Header = () => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header")
    header.classList.toggle("active", window.scrollY > 100)
  })
  // Toogle Menu
  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          <div className='logo'>
            <img src="" alt='' />
          </div>

          <div className='navlink'>
            <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>
              {/*<ul className='link f_flex uppercase {Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}'>*/}
              {/* <Link to="/">Home</Link> */}
              {/* <li>
                <a>A vos couleurs</a>
              </li> */}
              <li>
                <a href='/'>Accueil</a>
              </li>
              <li>
                <a href='/broderie'>Broderie</a>
              </li>
              <li>
                <a href='/serigraphie'>Serigraphie</a>
              </li>
              <li>
                <a href='/transferts'>Transferts</a>
              </li>
              <li>
                <a href='/infographie'>Infographie</a>
              </li>
              <li>
                <a href='/sublimation'>Sublimation</a>
              </li>
              <li>
                <a href='/signaletique'>Signalétique</a>
              </li>
              
              <li>
                <a href='/contact'><button className='home-btn'>CONTACT</button></a>
              </li>
            </ul>

            <button className='toggle' onClick={() => setMobile(!Mobile)}>
              {Mobile ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header