import React from "react";
import "./Main.css";
import { FaShoppingBag, FaMapMarkerAlt,FaRegCalendar } from "react-icons/fa";


const Store2 = () => {
  return (
    <div className="container-fluid">
      <div className="row main-container">
        {/* filter section */}
        <div className=" col-sm-9 mb-3 test">
          <div className="p-4 store-container">
            <div className=" row">
              <div>
                <h4 className="store-container-title">
                  {" "}
                  {"< "} your design space
                </h4>
              </div>
            </div>

            <div className=" row">
              <div className="col-sm-6">
                <div className="image-box">
                  <img
                    src={require("../assets/images/shoe4.jpeg")}
                    className="card-img-top"
                    alt="..."
                    height={510}
                  />

                  <p>rate this product ****</p>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="row">
                  <div className="col-sm-4">
                    <img
                      src={require("../assets/images/shoe4.jpeg")}
                      className="card-img-top mb-3"
                      alt="..."
                      height={160}
                    />
                    <img
                      src={require("../assets/images/shoe4.jpeg")}
                      className="card-img-top mb-3"
                      alt="..."
                      height={160}
                    />
                    <img
                      src={require("../assets/images/shoe4.jpeg")}
                      className="card-img-top"
                      alt="..."
                      height={160}
                    />
                  </div>
                  <div className="col-sm-8">
                    <h3>KSL 01</h3>
                    <p>by KICKSUP</p>

                    <span>*****</span>
                    <p className="dec-text">80 reviews</p>

                    <span className="price-text">Rs. 2000/-</span>
                    <p className="dec-text">
                      Get an exclusive 20% off shopping with HDFC bank
                    </p>

                    <div className="row">
                      <div className="col-sm-3">
                        <div className="price-text">Front</div>
                      </div>

                      <div className="col-sm-8">
                        <div className="colour-filter-box-single">
                          <div
                            className="colour-box"
                            style={{ backgroundColor: "#000" }}
                          ></div>
                          <div
                            className="colour-box"
                            style={{ backgroundColor: "#4FB7DC" }}
                          ></div>
                          <div
                            className="colour-box"
                            style={{ backgroundColor: "#53865C" }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-sm-3">
                        <div className="price-text">Middle</div>
                      </div>

                      <div className="col-sm-8">
                        <div className="colour-filter-box-single">
                          <div
                            className="colour-box"
                            style={{ backgroundColor: "#000" }}
                          ></div>
                          <div
                            className="colour-box"
                            style={{ backgroundColor: "#4FB7DC" }}
                          ></div>
                          <div
                            className="colour-box"
                            style={{ backgroundColor: "#53865C" }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-sm-3">
                        <div className="price-text">Back</div>
                      </div>

                      <div className="col-sm-8">
                        <div className="colour-filter-box-single">
                          <div
                            className="colour-box"
                            style={{ backgroundColor: "#000" }}
                          ></div>
                          <div
                            className="colour-box"
                            style={{ backgroundColor: "#4FB7DC" }}
                          ></div>
                          <div
                            className="colour-box"
                            style={{ backgroundColor: "#53865C" }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-sm-3">
                        <div className="price-text">Sole</div>
                      </div>

                      <div className="col-sm-8">
                        <div className="colour-filter-box-single">
                          <div
                            className="colour-box"
                            style={{ backgroundColor: "#000" }}
                          ></div>
                          <div
                            className="colour-box"
                            style={{ backgroundColor: "#4FB7DC" }}
                          ></div>
                          <div
                            className="colour-box"
                            style={{ backgroundColor: "#53865C" }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-sm-3">
                        <div className="price-text">Size</div>
                      </div>

                      <div className="col-sm-8">
                        <div className="colour-filter-box-single">
                          <div className="size-box">7</div>
                          <div
                            className="size-box"
                            style={{ backgroundColor: "#858585" }}
                          >
                            8
                          </div>
                          <div className="size-box">9</div>
                          <div className="size-box">10</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="text-center p-3">
                <button type="button" class="btn bottom-btn btn-light">
                  Share Design
                </button>
                <button type="button" class="btn bottom-btn btn-dark">
                      Add to Cart
                    </button>
      



              </div>
            </div>
          </div>
        </div>

        {/* cart section */}
        <div className="col-sm-3 mb-3 test">
          <div className="p-4 store-container position-relative">
            <div className=" row ">
              <div className="col-sm-6">
                <h4 className="store-container-title">CART</h4>
              </div>
              <div className="col-sm-6 text-end "><FaShoppingBag style={{ fontSize: '20px'}} /></div>
            </div>

            <div className=" row mt-3">
              <div className="col-sm-6 ">
                <div className="image-box position-relative">
                  <span class="position-absolute top-0 start-0 translate-middle badge rounded-circle bg-light">
                    x
                  </span>
                  <img
                    src={require("../assets/images/shoe4.jpeg")}
                    className="card-img-top"
                    alt="..."
                  />
                </div>
              </div>

              <div className="col-sm-6">
                <span>KSL 01</span>
                <p className="dec-text">by KICKUP & you</p>
                <span>Rs. 2000/-</span>
              </div>
            </div>
 
            {/* <div className="row m-5 p-5">
              <div className=" position-absolute top-50 start-50 translate-middle">
                <div className=" text-center">
                  <h6>What's stopping you, designer! </h6>
                </div>
              </div>
            </div> */}

            <div className="row ">
              <div className="row ">
                <div className=" position-absolute bottom-0 start-50 translate-middle-x">
                  <div className="bottom-menu">
                    <span><FaMapMarkerAlt/> Home</span>
                    <span> <FaRegCalendar/> Select Date</span>
                  </div>

                  <div className=" text-center p-4">
                    <button type="button" class="btn btn-secondary">
                      Order Now
                    </button>
                    
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store2;
