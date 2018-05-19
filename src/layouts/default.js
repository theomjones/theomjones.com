import React from 'react'

import Hero from '../components/Hero/'
import Header from '../components/Header/'

export default ({ children }) => (
  <div>
    <Header />
    <Hero title="Default" subtitle="default sub" />
    {children()}
  </div>
)
