import React from 'react';
import jiff from '../static/image/camp.jpg';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function AboutUsScreen() {
  return (
    <>
      <Nav />
      <div className="container text-center my-4">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <img src={jiff} alt="About us" className="img-fluid rounded" />
          </div>
        </div>
        <div className="row justify-content-center mt-4">
          <div className="col-md-8">
            <h1>This is Arxcher</h1>
            <p className="lead">
              Welcome to our recipe sharing platform, where food lovers from all over the world can connect, create, and share their favorite recipes. Whether you're a seasoned chef or just starting in the kitchen, you'll find a wide variety of delicious dishes to explore and enjoy.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutUsScreen;
