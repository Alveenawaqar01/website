import React from 'react'
import Bloghome from '../components/bloghome'
import Blogcard from '../components/blogcard'
import Footer from '../components/footer'

const page = () => {
  return (
    <div>
      <Bloghome/>
      <Blogcard/>
      <Blogcard/>
      <Footer/>
    </div>
  )
}

export default page
