import React from 'react'
import './Move.css'
import counselor from '../../assets/images/Counselor.png'
import man from '../../assets/images/Popular Man.png'
import money from '../../assets/images/Money Box.png'

const Move = () => {
  return (
    <div className='move__container'>
        <div className="move__text">
            <h2>Words that Move Us</h2>
            <p>We are always trying to improve our high standards so that you see us as the best in the business. We are creative, original, & unique!</p>
        </div>
        <div className="move__slides">
            <div className="move__slides--child">
                <img src={counselor} alt="Brand icons" />
                <p>Free Consultation</p>
            </div>
            <div className="move__slides--child">
                <img src={man} alt="Brand Icons" />
                <p> Brilliant Client Service</p>
            </div>
            <div className="move__slides--child">
                <img src={money} alt="Brand Icons" />
                <p> Affordable Pricing</p>
            </div>
        </div>
    </div>
  )
}

export default Move