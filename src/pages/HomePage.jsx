import React from 'react'
import HeroSlider from '../components/HeroSlider'
import Category from '../components/Category'
import MenCarousel from '../components/MenCarousel'
import WomenCarousel from '../components/WomenCarousel'
import ElectronicsCarousel from '../components/ElectronicsCarousel'
import JewelleryCarousel from '../components/JewelleryCarousel'

const HomePage = () => {
  return (
    <>
      <HeroSlider />
      <Category />
      <MenCarousel />
      <WomenCarousel />
      <ElectronicsCarousel />
      <JewelleryCarousel />
    </>
  )
}

export default HomePage
