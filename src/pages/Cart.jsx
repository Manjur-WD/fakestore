import React from "react";

const Cart = () => {
  return (
    <>
      <section className="cart-wrapper">
        <div className="container">
          <div className="row bg-white shadow my-5">
            <div className="col-md-9 p-2">
              <div className="left-cart-section  p-3">
                <div className="cart-head d-flex align-items-center justify-content-between border-bottom pb-3">
                  <h1 className=" fs-2  ">Shopping Cart</h1>
                  <p className="items fs-5 me-5 mb-0 fw-bold">5 Items</p>
                </div>
                <div className="cart-product pt-3">
                  <table className="w-100 ">
                    <thead className="w-100 ">
                      <tr>
                        <th>PRODUCT DETAILS</th>
                        <th>QUANTITY</th>
                        <th>PRICE</th>
                        <th>TOTAL</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-bottom border-top">
                        <td className="py-3">
                          <div className="d-flex gap-2">
                            <img
                              src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                              alt="product-image"
                              width={50}
                              style={{ objectFit: "contain" }}
                            />
                            <div
                              className="cart-product-detail"
                              style={{ width: "400px" }}
                            >
                              <h5>
                                Fjallraven - Foldsack No. 1 Backpack, Fits 15
                                Laptops
                              </h5>
                              <p className="fw-bold">men's clothing</p>
                              <figure className="text-danger">
                                <i class="ri-delete-bin-7-fill"></i> Remove
                              </figure>
                            </div>
                          </div>
                        </td>
                        <td className="px-5">
                          <span className="up me-2">+</span>
                          <span className="px-3 py-1 border">1</span>
                          <span className="down ms-2">-</span>
                        </td>
                        <td className="px-3">$400.00</td>
                        <td className="px-3">$400.00</td>
                      </tr>
                      <tr className="border-bottom border-top">
                        <td className="py-3">
                          <div className="d-flex gap-2">
                            <img
                              src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                              alt="product-image"
                              width={50}
                              style={{ objectFit: "contain" }}
                            />
                            <div
                              className="cart-product-detail"
                              style={{ width: "400px" }}
                            >
                              <h5>
                                Fjallraven - Foldsack No. 1 Backpack, Fits 15
                                Laptops
                              </h5>
                              <p className="fw-bold">men's clothing</p>
                              <figure className="text-danger">
                                <i class="ri-delete-bin-7-fill"></i> Remove
                              </figure>
                            </div>
                          </div>
                        </td>
                        <td className="px-5">
                          <span className="up me-2">+</span>
                          <span className="px-3 py-1 border">1</span>
                          <span className="down ms-2">-</span>
                        </td>
                        <td className="px-3">$400.00</td>
                        <td className="px-3">$400.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-md-3 p-2 ">
              <div className="right-cart-section p-4 mt-1">
                <h3 className="fw-bold border-bottom pb-4 fs-5">
                  Order Summery
                </h3>
                <div className="order-summery-head d-flex justify-content-between fw-bold">
                  <p>ITEMS 3</p>
                  <p>$500.00</p>
                </div>
                <div className="shipping-charge mb-3">
                  <label htmlFor="" className="fw-bold mb-1">
                    SHIPPING
                  </label>
                  <select name="" id="" className="form-control">
                    <option value="">Standard Shipping - $10.00</option>
                  </select>
                </div>

                <div className="promo-code mb-3">
                  <label htmlFor="" className="fw-bold mb-1">
                    PROMO CODE
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your Code"
                    className="form-control"
                  />
                  <button type="button" className="btn">APPLY</button>
                </div>
                <hr />
                <div className="total-cost d-flex justify-content-between fw-bold">
                  <p>TOTAL COST</p>
                  <p>$600.00</p>
                </div>
                <button className="form-control checkout">CHECKOUT</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
