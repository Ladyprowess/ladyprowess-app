import React from 'react'
import Topmenu from '../Topmenu/Topmenu'
import './Banner.css'


const AboutBanner = () => {
  return (
    <div className='aboutbanner__container'>
      <Topmenu/>
        <div className="banner__container--description">
        <h1>
          About Us
        </h1>
        <p>
        We at Lady Prowess want to demonstrate that putting the success of your audience first can be scaled.
        </p>
        </div>
    </div>
  )
}

export default AboutBanner