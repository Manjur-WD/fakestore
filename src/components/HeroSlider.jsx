import React from "react";
import mensBanner from "../assets/images/mens-banner.png";
import womenBanner from "../assets/images/women.png";
import electronicsBanner from "../assets/images/electronics.png";
import jewelleryBanner from "../assets/images/jewellery.png";

const HeroSlider = () => {
  return (
    <>
      <section className="banner">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="true"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="slider-item one">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-md-6 p-3">
                      <h2>Men's Collection</h2>
                      <p className="lead">
                        Welcome to the epitome of men's fashion. Dive into a
                        world where style meets substance...
                      </p>
                      <a href="men.html">Explore Men's Collection</a>
                    </div>
                    <div className="col-md-6 p-3">
                      <img src={mensBanner} alt="" className="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="slider-item two">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-md-6 p-3">
                      <h2>Women's Fashion</h2>
                      <p className="lead">
                        Indulge in the essence of femininity with our Women's
                        Fashion collection. Unleash your inner fashionista...
                      </p>
                      <a href="women.html">Discover Women's Fashion</a>
                    </div>
                    <div className="col-md-6 p-3">
                      <img src={womenBanner} alt="" className="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="slider-item three">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-md-6 p-3">
                      <h2>Electronics Hub</h2>
                      <p className="lead">
                        Welcome to the Electronics Hub, where innovation meets
                        functionality. Explore a world of cutting-edge
                        technology...
                      </p>
                      <a href="electronics.html">Explore Electronics</a>
                    </div>
                    <div className="col-md-6 p-3">
                      <img src={mensBanner} alt="" className="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="slider-item four">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-md-6 p-3">
                      <h2>Jewellery Extravaganza</h2>
                      <p className="lead">
                        Embark on a journey through our Jewelry Extravaganza – a
                        realm of timeless elegance and modern sophistication...
                      </p>
                      <a href="jewellery.html">Discover Jewellery</a>
                    </div>
                    <div className="col-md-6 p-3">
                      <img src={jewelleryBanner} alt="" className="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </>
  );
};

export default HeroSlider;
