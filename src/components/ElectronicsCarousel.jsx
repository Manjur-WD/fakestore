import axios from "axios";
import React, { useEffect, useState } from "react";
import Pcard from "./Pcard";

const ElectronicsCarousel = () => {
  const [elecProduct, setelecProducts] = useState([]);

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
    const apiURL = "https://fakestoreapi.com/products/category/electronics?limit=4";
    fetch(apiURL)
      .then(response => response.json())
      .then(data => setelecProducts(data))
  }

  return (
    <>
      <section className=" electronics-carousel mb-5">
        <div className="container">
          <div className="category-carousel ">
            <h2 className="fw-bold">Top <span> Electronics </span> Collections</h2>
            <a href="">SHOW ALL</a>
          </div>
          <div className="row mt-3">
            {elecProduct.map((items, index) => {
              return (
                <div className="col-lg-3 col-6 mb-2" key={index}>
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

export default ElectronicsCarousel;