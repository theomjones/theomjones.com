import React from 'react'

import Hero from '../components/Hero/'
import Header from '../components/Header/'
import Footer from '../components/Footer'

export default ({ children }) => (
  <div>
    <Header />
    {children()}
    <Footer />
  </div>
)
