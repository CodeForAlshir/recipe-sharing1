import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Change from Switch to Routes
import RecipeAboutScreen from './screens/RecipeAboutScreen';
import Home from './screens/HomeScreen';
import AboutUs from './screens/AboutUsScreen'
import Creator from './screens/CreatorScreen'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/AboutUs" element={<AboutUs />} /> 
        <Route path="/Creator" element={<Creator />} /> 
        <Route path="/recipe/:id" element={<RecipeAboutScreen />} /> 
      </Routes>
    </Router>
  );
};

export default App;


