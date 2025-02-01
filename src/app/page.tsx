import React from 'react'
import Heropage from './components/hero'
import Aboutus from './components/aboutus'
import Foodcategory from './components/foodcategory'
import FoodCards from './components/FoodCard'
import Feautres from './components/feautres'
import Ordinary from './components/ordinary'
import Chef from './components/Chef'
import Icons from './components/icons'
import Footer from './components/footer'
import Blog from './components/blog'
import Blogtitle from './components/blogtitle'
import Navbar from './components/Navbar'

const page = () => {
  return (
    <div>
      <Navbar/>
      <Heropage/>
      <Aboutus/>
      <Foodcategory/>
      <Ordinary/>
      <Feautres/>
      <FoodCards/>
      <Chef/>
      <Icons/>
      <Blogtitle/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default page
