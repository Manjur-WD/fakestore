import axios from "axios";
import React, { useEffect, useState } from "react";
import Pcard from "./Pcard";
import { Link } from "react-router-dom";

const JewelleryCarousel = () => {
  const [jewelProduct, setjewelProducts] = useState([]);

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
    const apiURL = "https://fakestoreapi.com/products/category/jewelery?limit=3";
    fetch(apiURL)
      .then(response => response.json())
      .then(data => setjewelProducts(data))
  }

  return (
    <>
      <section className=" jewellery-carousel mb-5">
        <div className="container">
          <div className="category-carousel ">
            <h2 className="fw-bold">Top <span> Jewellery </span> Collections</h2>
            <Link to="/category/jewelery">SHOW ALL</Link>
          </div>
          <div className="row mt-3">
            {jewelProduct.map((items) => {
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

export default JewelleryCarousel;
