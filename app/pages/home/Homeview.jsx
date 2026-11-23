import React from 'react'
import HeroSection from './Herosection'
import Homeabout from './Homeabout'
import Servicesec from './Servicesec'
import WhyChooseUs from './Whyus'
import CTASection from './Cta'
import HajjPackages from './HomeHajj'


function Homeview() {
  return (
    <div>
        <HeroSection/>
        <Homeabout/>
        <HajjPackages/>
        <Servicesec/>
      <WhyChooseUs/>
      <CTASection/>
      
    </div>
  )
}

export default Homeview