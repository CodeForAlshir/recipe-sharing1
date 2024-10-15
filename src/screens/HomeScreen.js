import React from 'react'
import Nav from '../components/Nav.js'
import Footer from '../components/Footer.js';
import  Carousel  from '../components/carousel.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 

import RecipeScreen from '../screens/RecipeScreen.js'
function HomeScreen() {
  return (
   <>
   <Nav />
   <Carousel />
   <RecipeScreen />
   <Footer />
   </>
  )
}

export default HomeScreen