import React from "react";
import logo from "../assets/images/QuickMART logo.png";

const Header = () => {
  return (
    <>
      <header className="bg-white">
        <nav className="navbar navbar-expand-lg container">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src={logo} alt="brand-logo" width={150} />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-3  text-center">
                <li className="nav-item ">
                  <a className="nav-link active-nav" aria-current="page" href="#">
                    ALL PRODUCTS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">
                    MENS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">
                    WOMENS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">
                    ELECTRONICS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">
                    JEWELLERY
                  </a>
                </li>
              </ul>
              <div className="right-head text-center">
              <i className="ri-search-line mx-3 fs-5"></i>
              <i className="ri-user-3-line mx-3 fs-5"></i>
              <div className="cart-icon">
                <i className="ri-shopping-cart-2-line mx-3 fs-5"></i>
                <span className="count-cart">1</span>
              </div>
            </div>
            </div>
            
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
