import React, { Component } from 'react'
import './commonResource/css/bootstrap.css'
import './commonResource/css/styles.css'
import HeaderNavigation from './components/HeaderNavigation/HeaderNavigation';
import AlertSection from './components/AlertSection/AlertSection';
import FirstSection from './components/body/FirstSection/FirstSection';
import SecondSection from './components/body/SecondSection/SecondSection';
import ThirdSection from './components/body/ThirdSection/ThirdSection';
import FourthSection from './components/body/FourthSection/FourthSection';
import FifthSection from './components/body/FifthSection/FifthSection';
import SixthSection from './components/body/SixthSection/SixthSection';
import Footer from './components/Footer/Footer';

export default class App extends Component {
  render() {
    return (
      <>
      <HeaderNavigation />
      <AlertSection />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <Footer />
   
      
      </>
    )
  }
}

