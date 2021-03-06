import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <header>
        <div className="overlay" />
        <video
          playsInline="playsinline"
          autoPlay="autoplay"
          muted="muted"
          loop="loop"
          src="https://leonelnieto.github.io/video/Strategic%20Direction%20no%20music.mp4"
          type="video/mp4"
        />
        <div className="container h-100">
          <div className="d-flex h-100 align-items-center">
            <div className="container col-8 justify-content-center text-dark bg-light rounded">
              <div className="row mt-3 mb-3">
                <div className="col-4">
                  <img src="img/shsp.JPG" className="rounded mx-auto d-block img-fluid" />
                </div>
                <div className="col-8 d-flex flex-column justify-content-center">
                  <div className="row">
                    <div className="col my-0 text-center">
                      <h2>Strategic Highway</h2>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col text-center">
                      <h1 className="display-3 text-danger font-weight-bold">Safety Plan</h1>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col text-center">
                      <p className="my-0">Version 5.0</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Home;
