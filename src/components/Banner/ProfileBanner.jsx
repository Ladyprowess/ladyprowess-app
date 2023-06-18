import React from 'react'
import './Banner.css'
import Topmenu from '../Topmenu/Topmenu'

const ProfileBanner = () => {
  return (
    <div className='profilebanner__container'>
      <Topmenu/>
    <div className="banner__container--description">
    <h1>
      Profile
    </h1>
   
    </div>
</div>
  )
}

export default ProfileBanner