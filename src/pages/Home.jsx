import React from 'react'
import About from '../components/About/About'
import Banner from '../components/Banner/Banner'
import Features from '../components/Features/Features'
import Footer from '../components/Footer/Footer'
import Goals from '../components/Goals/Goals'
import Services from '../components/Services/Services'
import Testimonial from '../components/Testimonials/Testimonial'

const Home = () => {
  return (
    <>
    <Banner/>
    <Features/>
    <About/>
    <Services/>
    <Goals/>
    <Testimonial/>
    <Footer/>
    </>
  )
}

export default Home