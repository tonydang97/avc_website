import React from 'react'
import "./Technique.css"
import { Link } from "react-router-dom"

const Cardtest = () => {
  return (
    <>
      <section className='features top' id="features">
            <div className='container'>
                <div className='heading'>
                    <h4>Marquage textile</h4>
                    <h1>Nos services proposés</h1>
                </div>

                <div className='content grid' id="gridtechnique">
                   <Link to="/serigraphie"><div className='box btn_shadow'>
                        <img src="https://img.icons8.com/fluency-systems-filled/48/000000/screen-printing.png" alt=""/>
                        <h2>Sérigraphie</h2>
                       <p id="desctruncate">Procédé d'impression similaire au principe du pochoir, la sérigraphie est réalisée avec...</p>
                        <a href="/">
                            <i className='fas fa-arrow-right'></i>
                        </a>
                    </div>
                    </Link>
                    <Link to="/broderie"><div className='box btn_shadow'>
                        <img src="https://img.icons8.com/ios-filled/48/000000/hand-holding-needle.png" alt=""/>
                        <h2>Broderie</h2>
                       <p id="desctruncate">La broderie offre une image trés qualitative et durable dans le temps...</p>
                        <a href="/">
                            <i className='fas fa-arrow-right'></i>
                        </a>
                    </div>
                    </Link>
                    <Link to="/transferts"><div className='box btn_shadow'>
                        <img src="https://img.icons8.com/ios-filled/50/000000/cnc-machine.png" alt=""/>
                        <h2>Transferts</h2>
                       <p id="desctruncate">Le transfert est une technologie qui permet de déposer un film imprimé...</p>
                        <a href="/">
                            <i className='fas fa-arrow-right'></i>
                        </a>
                    </div>
                    </Link>
                    <Link to="/infographie"><div className='box btn_shadow'>
                        <img src="https://img.icons8.com/ios-filled/50/000000/workstation.png"alt=""/>
                        <h2>Infographie</h2>
                       <p id="desctruncate">Le domaine de la création d'images numériques assistée par ordinateur...</p>
                        <a href="/">
                            <i className='fas fa-arrow-right'></i>
                        </a>
                    </div>
                    </Link>
                    <Link to="/sublimation"><div className='box btn_shadow'>
                        <img src="https://img.icons8.com/external-vitaliy-gorbachev-fill-vitaly-gorbachev/50/000000/external-mug-mother-day-vitaliy-gorbachev-fill-vitaly-gorbachev.png" alt=""/>
                        <h2>Sublimation</h2>
                       <p id="desctruncate">L’impression par sublimation est une technique d’impression sur textile</p>
                        <a href="/">
                            <i className='fas fa-arrow-right'></i>
                        </a>
                    </div>
                    </Link>
                    <Link to="/signaletique"><div className='box btn_shadow'>
                        <img src="https://img.icons8.com/ios-filled/50/000000/under-construction.png" alt=""/>
                        <h2>Signalétique</h2>
                       <p id="desctruncate">Pour tout vos objets et panneaux publicitaires qui servent à refleter votre image de marque...</p>
                        <a href="/">
                            <i className='fas fa-arrow-right'></i>
                        </a>
                    </div>
                    </Link>
                </div>
                
            </div>
        </section>
        
    </>
  )
}

export default Cardtest