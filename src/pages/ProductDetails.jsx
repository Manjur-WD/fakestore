import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";

const ProductDetails = () => {
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiURL = `https://fakestoreapi.com/products/${id}`;
        const response = await fetch(apiURL);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]); // Include categoryName as a dependency to re-run effect when it changes

  useEffect(() => {
    const navbarToggler = document.querySelector(".navbar-collapse");
    if (navbarToggler) {
      navbarToggler.classList.remove("show");
    }

    window.scrollTo(0, 0);
  }, [id]);

  const handleCart = () =>{

  }

  return (
    <>
      <section className="product-details p-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex justify-content-center">
              <img
                src={product.image}
                alt="product-image"
                className="img-fluid"
              />
            </div>
            <div className="col-md-6 pt-5">
              <h2>{product.title}</h2>
              <p className="fs-1 fw-bold">${product.price}</p>
              <p className="lead">{product.description}</p>
              <p className="border d-inline-block  p-2">
                <span className="fw-bold">Category :</span> {product.category}
              </p>
              <div className="product-action-btn mt-3">
                <button type="button" className="btn">
                <i className="ri-heart-fill"></i>
                  ADD TO WISHLIST
                </button>
                <button type="button" className="btn" onClick={handleCart}>
                <i className="ri-shopping-cart-fill"></i>
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
