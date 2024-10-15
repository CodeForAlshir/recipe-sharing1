import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import pip from '../static/image/al.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

function CreatorScreen() {
  return (
    <>
      <Nav />
      <div className="container my-4">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img src={pip} alt="Creator" className="img-fluid rounded" />
          </div>
          <div className="col-md-6">
            <p className="lead">
              This is Alshir the creator of the website, Arxcher, a platform dedicated to sharing delicious and unique recipes. Arxcher's vision is to bring together food enthusiasts from all around the world, making it easy to discover, create, and share recipes with a community of passionate cooks.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CreatorScreen;
