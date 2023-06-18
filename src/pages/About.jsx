import React from 'react'
import AboutLady from '../components/About/AboutLady'
import AboutBanner from '../components/Banner/AboutBanner'
import Footer from '../components/Footer/Footer'
import Move from '../components/Move/Move'
import Services from '../components/Services/Services'

const About = () => {
  return (
    <>
        <AboutBanner/>
        <AboutLady/>
        <Move/>
        <Services/>
        <Footer/>
    </>
  )
}

export default About