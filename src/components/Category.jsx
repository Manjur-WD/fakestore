import React, { useEffect } from "react";
import mensCategoryImage from "../assets/images/men.jpg";
import womensCategoryImage from "../assets/images/womens.jpg";
import electronicsCategoryImage from "../assets/images/elec.webp";
import jewelleryCategoryImage from "../assets/images/jewel.jpg";

const Category = () => {
  
  return (
    <>
      <section className="category-wrapper my-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="category-box">
                <h4>MEN'S COLLECTION</h4>
                <img
                  src={mensCategoryImage}
                  alt="mens category image"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="category-box">
                <h4>WOMEN'S COLLECTION</h4>
                <img
                  src={womensCategoryImage}
                  alt="mens category image"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="category-box">
                <h4>ELECTRONICS</h4>
                <img
                  src={electronicsCategoryImage}
                  alt="mens category image"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="category-box">
                <h4>JEWELLERIES</h4>
                <img
                  src={jewelleryCategoryImage}
                  alt="mens category image"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </>
  );
};

export default Category;
