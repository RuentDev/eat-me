import React from 'react'
import { FONTS, COLORS, } from '../constants'
import { Rating } from 'react-simple-star-rating'

const TestimonialCard = ({
    testimony,
    name,
    personality,
    rating,
    image,
}) => {
    return (
        <>
            <p style={{...FONTS.body5, color: COLORS.gray}}> 
                <span style={styles.qoutes}>" </span> 
                    {testimony} 
                <span style={styles.qoutes}> "</span> 
            </p>
            <div style={styles.profileContainer}>
                <div style={styles.imageContainer}>
                    <img src={image} alt={name} height={70} width={70}/>
                </div>
                <div style={styles.profle}>
                    <h5 style={{...FONTS.h5}} className="customer-name">{name}</h5>
                    <p style={{...FONTS.body5, color: COLORS.gray}}>{personality}</p> 
                </div>
            </div> 
                <Rating ratingValue={rating} readonly={true} size={30}/>
        </>
    )
}

const styles = {
    qoutes: {
        fontWeight: "800",
        fontSize: '1.5rem',
        color: COLORS.black
    },
    profileContainer: {
        display: 'flex',
    },
    imageContainer: {
        width: '70px',
        height: '70px',
        borderRadius: '50%',
    },
    profile: {
        margin: '.5rem 1rem'
    }
}

export default TestimonialCard
