import React, { useEffect, useState } from "react";

const MenCarousel = () => {
  const [mensProduct, setmensProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/men's%20clothing")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return setmensProducts(data);
      });

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

  return (
    <>
      <section className="mens-carousel">
        <div className="container">
          <div className="row">
            {mensProduct.map((menItems, index) => {
              return (
                <div className="col-md-3" key={index}>
                  <p>{menItems.title}</p>
                  <img src={menItems.image} alt="" width={200}/>
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
