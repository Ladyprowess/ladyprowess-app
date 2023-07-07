import React from 'react'
import Topmenu from '../Topmenu/Topmenu'
import './Banner.css'

const ServicesBanner = ({heading}) => {
  return (
    <div className="profilebanner__container">
    <Topmenu />
    <div className="banner__container__description">
      <h1>{heading}</h1>
    </div>
  </div>
  )
}

export default ServicesBanner