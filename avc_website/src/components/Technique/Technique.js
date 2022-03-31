import React from 'react';
import "../Technique/Technique.css";
import Card from "./Card.js"
import data from "./TechniqueAPI"

const Technique = () => {
  return (
    <>
        <section className='features top' id="features">
            <div className='container'>
                <div className='heading'>
                    <h4>Marquage textile</h4>
                    <h1>NOS SERVICES PROPOSÉS</h1>
                </div>

                <div className='content grid'>
                    {data.map((val, index) => {
                        return <Card 
                        key={index}  
                        image={val.image}
                        title={val.title}
                        desc={val.desc}
                        />
                    })}
                </div>
            </div>
        </section>
    </>
  )
}

export default Technique