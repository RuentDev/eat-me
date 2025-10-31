import './about.css'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faQuoteLeft} from '@fortawesome/free-solid-svg-icons'

import {COLORS, FONTS, constants} from  '../../constants'
import React from 'react'
import ChiefCard from '../../components/ChiefCard/ChiefCard'

const About = () => {
  return (
    <div className='about-page'>
        <div className="top-heading">
          <h3>About Us</h3>
        </div>

        <div className="container">
            <div className="about-page-main-content">
              <div className="about-page-main-content-heading">
                <h3>Welcome to Eatme Restaurant</h3>
                <img className='chief-team-heading-image' src="/images/chicken_itle_55x17.png" alt=""/>
              </div>

              <div className="container about-page-content">
                  <div className="column">
                    <img src="/images/about-image.webp" alt="" />
                  </div>
                  <div className="column" style={{padding: '2rem'}}>
                    <FontAwesomeIcon icon={faQuoteLeft} size="10x" color='lightGray'/>
                    <p>
                    Eros ludus laboramus ne eam. Mea inani utamur rationibus eu, his ei assum volutpat. Integre dolorem mel an, mei nihil omittam et. Postea regione mentitum ei quo, debitis phaedrum conceptam vis at. Fugit choro scriptorem nam an, vel ex possit audire. Qui elitr graeci referrentur ad, eu ludus laudem tincidunt vel, ad vim wisi graeci efficiendi.
                    </p>

                    <h4 style={{...FONTS.h4, color: COLORS.orange}}>Juan Dela Cruz <span style={{...FONTS.body5, color: COLORS.red}}>Master Chef</span></h4>
                  </div>
              </div>
            </div>
        </div>

        <div className="our-offers">
          <div className="our-offers-container ">
              <div 
                style={{
                  display: 'flex', 
                  flexDirection: 'column', 
                  textAlign: 'center',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <h3 style={{color: COLORS.white}}>Check our restaurant offers</h3>
                <p style={{color: COLORS.orange, ...FONTS.h4}}>Grilled, Crispy, Fried Chiken <br /> <span style={{...FONTS.h1}}>30% off</span></p>
                <p style={{width: '70%', ...FONTS.body5}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis, a porttitor tellus sollicitudin at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
              </div>
          </div>
        </div>
        
        <div className="chief-team">
          <div className="chief-team-container">
            <div className="chief-team-heading">
              <h4 style={{...FONTS.h4}}>Our Chief Team</h4>
              <img className='chief-team-heading-image' src="/images/chicken_itle_55x17.png" alt="" />
            </div>
            <div className="chief-team-list">
              {constants.chiefs.map(chief => (
                <ChiefCard 
                  key={chief.id}
                  image={chief.image}
                  name={chief.name}
                  expertise={chief.expertise}
                />
              ))}
            </div>
          </div>
        </div>

    </div>
  )
}

export default About