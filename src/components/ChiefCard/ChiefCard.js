import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faTwitter, faInstagram, faYoutube} from '@fortawesome/fontawesome-free-brands'
import './chiefcard.css'
const ChiefCard = ({
    image,
    name,
    expertise
}) => {
  return (
    <div className='chief-card'>
        <div className="chief-card-top">
            <img src={image} alt={name} className="chief-image" />
            <div className="overlay overlay-top"></div>
            <div className="overlay overlay-bottom">
                <div className="chief-card-top-icon-container">
                    <FontAwesomeIcon 
                        icon={faFacebook} 
                        size="lg" 
                        color='white'
                        className='chief-card-social-icon' 
                    />
                    <FontAwesomeIcon 
                        icon={faTwitter} 
                        size="lg"
                        color='white'
                        className='chief-card-social-icon' 
                    />
                    <FontAwesomeIcon 
                        icon={faInstagram} 
                        size="lg" 
                        color='white' 
                        className='chief-card-social-icon'
                    />
                    <FontAwesomeIcon 
                        icon={faYoutube} 
                        size="lg"
                        color='white' 
                        className='chief-card-social-icon'
                    />
                </div>
            </div>
        </div>
        <div className="chief-card-bottom">
            <p className="chief-name">{name}</p>
            <p className="chief-expertise">{expertise}</p>
        </div>
    </div>
  )
}

export default ChiefCard