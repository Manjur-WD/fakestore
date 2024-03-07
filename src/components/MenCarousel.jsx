import React, { useEffect, useState } from "react";
import Pcard from "./Pcard";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";

const MenCarousel = () => {
  const [mensProduct, setmensProducts] = useState([]);

  useEffect(() => {
    getMansData();
  }, []);

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

  const getMansData = () => {
    const apiURL =
      "https://fakestoreapi.com/products/category/men's%20clothing";
    fetch(apiURL)
      .then((response) => response.json())
      .then((data) => setmensProducts(data));
  };

  return (
    <>
      <section className="mens-carousel mb-5">
        <div className="container">
          <div className="category-carousel">
            <h2 className="fw-bold">
              Top <span>Mens</span> Collections
            </h2>
            <Link to="/category/men's clothing">SHOW ALL</Link>
          </div>
          <div className="mt-3">
            <Carousel responsive={responsive}>
              {mensProduct.map((items) => {
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
            ;
          </div>
        </div>
      </section>
    </>
  );
};

export default MenCarousel;
