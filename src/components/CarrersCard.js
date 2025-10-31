import React from 'react'
import { Button } from '.'
import { COLORS, FONTS } from '../constants'

const CarrersCard = ({image, title}) => {
    return (
        <div
            style={{
                backgroundColor: COLORS.transparentPrimray,
                padding: '2rem',
                borderRadius: '10px',

                width: '515px'
            }}
        >
            <img src={image} alt={title} width={450} style={{borderRadius: '25px', margin: '0 0 1rem 0'}}/>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <h4 style={{...FONTS.h4}}>{title}</h4>
                <Button 
                    label="Learn More"
                />
            </div>
        </div>
    )
}

export default CarrersCard
