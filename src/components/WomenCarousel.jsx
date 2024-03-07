import axios from "axios";
import React, { useEffect, useState } from "react";
import Pcard from "./Pcard";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";

const WomenCarousel = () => {
  const [womensProduct, setwomensProducts] = useState([]);

  useEffect(() => {
    getMansData();
  }, []);

  const getMansData = () => {
    const apiURL =
      "https://fakestoreapi.com/products/category/women's%20clothing?limit=3";
    fetch(apiURL)
      .then((response) => response.json())
      .then((data) => setwomensProducts(data));
  };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <>
      <section className=" womens-carousel mb-5">
        <div className="container">
          <div className="category-carousel">
            <h2 className="fw-bold">
              Top <span> Womens </span> Collections
            </h2>
            <Link to="/category/women's clothing">SHOW ALL</Link>
          </div>
          <div className="mt-3">
            <Carousel responsive={responsive}>
            {womensProduct.map((items) => {
              return (
                <div className="item">
                  <Pcard
                    image={items.image}
                    price={items.price}
                    title={items.title}
                    rate={items.rating.rate}
                    count={items.rating.count}
                    keys={items.id}
                  />
                </div>
              );
            })}
            </Carousel>
          </div>
        </div>
      </section>
    </>
  );
};

export default WomenCarousel;
