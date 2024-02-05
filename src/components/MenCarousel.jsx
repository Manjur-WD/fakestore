import axios from "axios";
import React, { useEffect, useState } from "react";
import Pcard from "./Pcard";
import { Link } from "react-router-dom";

const MenCarousel = () => {
  const [mensProduct, setmensProducts] = useState([]);

  useEffect(() => {

    getMansData();

    // CAROUSEL INITIALIZER
    $(".owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 5,
        },
      },
    });
  }, []);

  const getMansData = () => {
    const apiURL = "https://fakestoreapi.com/products/category/men's%20clothing?limit=3";
    fetch(apiURL)
      .then(response => response.json())
      .then(data => setmensProducts(data))
  }

  return (
    <>
      <section className="mens-carousel mb-5">
        <div className="container">
          <div className="category-carousel">
            <h2 className="fw-bold">Top <span>Mens</span> Collections</h2>
            <Link to="/category/men's clothing">SHOW ALL</Link>
          </div>
          <div className="row mt-3">
            {mensProduct.map((items) => {
              return (
                <div className="col-lg-4 col-6 mb-2" key={items.id}>
                  <Pcard
                    image={items.image}
                    price={items.price} 
                    title={items.title}
                    rate={items.rating.rate}
                    count={items.rating.count}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default MenCarousel;
