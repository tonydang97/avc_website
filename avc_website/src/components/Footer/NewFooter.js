import React from 'react';
import styled, {css} from "styled-components/macro";
import { Link } from "react-router-dom";
import {FaInstagram, FaFacebookF, FaLinkedin} from "react-icons/fa"
import logo from "../../images/logolarégion.png"

const Section = styled.section`
background: #005F62;
color: #fff;
width: 100%;
min-height: 600px;
padding: 3rem calc((100vw - 1300px) / 2);
`;
const Container = styled.div`
height: 100%;
width: 100%;
padding: 2rem;
`;

const FooterTop = styled.div`
display: flex;
flex-direction: row;
padding: 4rem 0rem;

@media screen and (max-width: 768px) {
    flex-direction: column;
}
`;

const Quote = styled.div`
flex: 1;
padding: 2rem 0rem;

h3 {
    font-size: clamp(2rem, 8vw, 5rem);
}

p {
    color: #fff;
    font-size: 2rem;
}
`;

const Logo = styled.img.attrs({src: `${logo}`})`
display: flex;
justify-content: end;
width: 50px;
height: 50px;

`;

const FooterInfo = styled.div`
padding: 2rem;
line-height: 3;
display: flex;
flex-direction: column;

a, p{
    color: #fff;
    text-decoration: none;
}

@media screen and (max-width: 768px) {
    padding: 1rem 0rem;
}
`;

const FooterBottom = styled.div`
display: flex;
padding: 2rem 0rem;

@media screen and (max-width: 768px) {
    flex-direction: column;
}
`;

const Copyright = styled.div`
p {
    color:  #fff;
    display: flex;
    justify-content: center;
}
`

const SocialIcons = styled.div`
display: flex;
justify-content: center;
width: 100%;

@media screen and (max-width: 768px) {
    margin-bottom: 2rem;
    width: 100%;
}
`;

const Icons = css`
display: flex;
justify-content: center;
font-size: clamp(1rem, 6vw, 2rem);
margin-right: 1.5rem;
color: #fff;
`

const OtherPages = styled.div`
a {
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    
}
`
const Instagram = styled(FaInstagram)`
${Icons}
`;

const Facebook = styled(FaFacebookF)`
${Icons}
`;

const Linkedin = styled(FaLinkedin)`
${Icons}
`;

const NewFooter = () => {
  return (
    <Section>
        <Container>
            <FooterTop>
                <Quote>
                    <h3>A vos couleurs</h3>
                    <p>Au service des professionnels</p>
                </Quote>
                <FooterInfo>
                    <h4>Coordonnées</h4>
                    <p>5 Rue Jacques GUIGNARD,<br />parc des escalettes, 31820 Pibrac</p>
                    <p>05 61 91 52 46</p>
                    <p>contact@avoscouleurs.com</p>
                </FooterInfo>
                <FooterInfo>
                    <h4>A propos</h4>
                    <Link to="/">Accueil</Link>
                    <Link to="/contact">Contactez nous</Link>
                    <Link to="/faq">FAQ</Link>
                </FooterInfo>
            </FooterTop>
            <FooterBottom>
                <SocialIcons>
                    <a href="//www.instagram.com/avoscouleurs/?hl=fr" rel="noopener noreferrer" target="_blank">
                        <Instagram />
                    </a>
                    <a href="//www.facebook.com/avoscouleurs31" rel="noopener noreferrer" target="_blank">
                        <Facebook />
                    </a>
                    <a href="//www.linkedin.com/company/eurl-a-vos-couleurs/" rel="noopener noreferrer" target="_blank">
                        <Linkedin />
                    </a>
                    <a href="//www.laregion.fr/" rel="noopener noreferrer" target="_blank">
                        <Logo />
                    </a>
                    
                </SocialIcons>
                
            </FooterBottom>
                    <Copyright><p>Copyright &copy; AVOSCOULEURS 2022 - tous droits réservés. </p></Copyright>
                    <OtherPages>
                    <a><Link to="/mention-legales"> Mention légales</Link></a>
                    </OtherPages>
                    
        </Container>
    </Section>
  )
}

export default NewFooter