import React from 'react'
import Header from '../Header_bar/Header'
import Footer from './../Footer/Footer';
import Cover from './Collection_mini/Cover';
import Newsletter from './Collection_mini/Newsletter';

const Collection = () => {
  return (
    <div>
      <Header />
      <Cover />
      <Newsletter /> 
      <Footer />
    </div>
  )
}

export default Collection