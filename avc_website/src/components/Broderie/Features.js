import React from 'react'
import styled from "styled-components"
import ImageOne from "../../images/assetBroderie/bobinerose.jpg"

const Section = styled.section`
background: #000d1a;
padding: 12rem 0rem;
display: flex;
flex-direction: column;
justify-content: center;
`;

const Container = styled.div`
background: #eefbef;
padding: 3rem 2rem;
position: relative;
`;

const Wrap = styled.div`
max-width: 1200px;
margin-auto: 0 auto;
`;

const ColumnLeft = styled.div`
display: flex;
flex-wrap: wrap;
margin: 0px -15px;
justify-content: flex-start;
padding: 1rem;
`;
const Content = styled.div`
flex: 0 0 50%;

@media screen and (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
    margin-top: 250px;
}

h1 {
    margin-bottom: 2rem;
    font-size: 2rem;
}

p {
    margin-bottom: 1rem;
    line-height: 1.5;
}
`;

const ColumnRight = styled.div`
position: absolute;
top: -80px;
right: 0;
max-width: 850px;
height: 140%;
width: 45%;
padding-left: 1rem;

@media screen and (max-width: 768px) {
    height: 320px;
    top: -65px;
    width: 80%;
    margin: 0 auto;
    left: 0;
}
`;

const Image = styled.img`
height: 100%;
width: 100%;
object-fit: cover;
`;



const Features = () => {
  return (
   <Section>
       <Container>
           <Wrap>
               <ColumnLeft>
                <Content>
                    <h1>Un large choix de couleurs</h1>
                    <p>Chez a vos couleurs, nous rechercherons le fil le plus proche pour chaque couleur de votre logo. A partir d’une référence pantone, CMJN, sortie papier ou tout simplement selon votre choix.</p>
                    <p>Nous sommes équipés de 2 machines à broder 6 têtes permettant de broder jusqu’à 12 couleurs.</p>
                </Content>
               </ColumnLeft>
               <ColumnRight>
                <Image src={ImageOne} />
               </ColumnRight>
           </Wrap>
       </Container>
   </Section>
  )
}

export default Features