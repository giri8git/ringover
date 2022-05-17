import React from "react";
import "./Main.css";
import { FaShoppingBag, FaMapMarkerAlt,FaRegCalendar } from "react-icons/fa";


const Store = () => {
  return (
    <div className="container-fluid">
      <div className="row main-container">
        {/* filter section */}
        <div className=" col-sm-3 mb-3 test">
          <div className="p-4 store-container">
            <div className=" row">
              <div className="col-sm-6">
                <h4 className="store-container-title">FILTERS</h4>
              </div>
              <div className="col-sm-6 text-end ">hghg</div>
            </div>
            <div className="store-container-data">
              <div className="row pt-3">
                <h4 className="filter-menu-title">Cost</h4>
                {/* price section */}
                <div>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                  />
                  <label className="form-check-label">Rs. 1500-4000</label>
                </div>

                <div>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                  />
                  <label className="form-check-label">Rs. 4001-7000 </label>
                </div>

                <div>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                  />
                  <label className="form-check-label">Rs. 7001+ </label>
                </div>
              </div>

              <div className="row pt-3">
                <h4 className="filter-menu-title">Colour</h4>
                <div className="colour-filter-box">
                <div className="colour-box" style={{backgroundColor: "#ED3939"}}></div>
                <div className="colour-box" style={{backgroundColor: "#4FB7DC"}}></div>
                <div className="colour-box" style={{backgroundColor: "#F5EA5E"}}></div>
                <div className="colour-box" style={{backgroundColor: "#65DC85"}}></div>
                <div className="colour-box" style={{backgroundColor: "#B4B741"}}></div>
              </div>
                
              </div>

              <div className="row pt-3">
                <h4 className="filter-menu-title">Design templates</h4>
                <div>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                  />
                  <label className="form-check-label">2</label>
                </div>

                <div>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                  />
                  <label className="form-check-label">3</label>
                </div>
                <div>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                  />
                  <label className="form-check-label">3+</label>
                </div>
              </div>

              <div className="row pt-3">
                <h4 className="filter-menu-title">Type</h4>
                <div>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                  />
                  <label className="form-check-label">Loafers</label>
                </div>
                <div>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                  />
                  <label className="form-check-label">Sneakers</label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* product section */}

        <div className="col-sm-6 mb-3 test ">
          <div className=" p-4  store-container">
            <div className=" row">
              <div className="col-sm-6 ">
                <h4 className="store-container-title">SHOES</h4>
              </div>
              <div className="col-sm-6 text-end ">hghg</div>
            </div>
            <div className="row">
              <div className="col-sm-4 ">
                <img
                  src={require("../assets/images/shoe4.jpeg")}
                  className="card-img-top"
                  alt="..."
                />
                <h4 className="product-title">KSL 01</h4>
                <div className="row">
                  <div className="col-sm-6">
                    <p>Rs.2000/-</p>
                  </div>
                  <div className="col-sm-6 text-end">
                    <p>*****</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 ">
                <img
                  src={require("../assets/images/shoe3.jpg")}
                  className="card-img-top"
                  alt="..."
                />
                <h4 className="product-title">KSL 01</h4>
                <div className="row">
                  <div className="col-sm-6">
                    <p>Rs.2000/-</p>
                  </div>
                  <div className="col-sm-6 text-end">
                    <p>*****</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 ">
                <img
                  src={require("../assets/images/shoe1.jpg")}
                  className="card-img-top"
                  alt="..."
                />
                <h4 className="product-title">KSL 01</h4>
                <div className="row">
                  <div className="col-sm-6">
                    <p>Rs.2000/-</p>
                  </div>
                  <div className="col-sm-6 text-end">
                    <p>*****</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-4 ">
                <img
                  src={require("../assets/images/shoe4.jpeg")}
                  className="card-img-top"
                  alt="..."
                />
                <h4 className="product-title">KSL 01</h4>
                <div className="row">
                  <div className="col-sm-6">
                    <p>Rs.2000/-</p>
                  </div>
                  <div className="col-sm-6 text-end">
                    <p>*****</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 ">
                <img
                  src={require("../assets/images/shoe3.jpg")}
                  className="card-img-top"
                  alt="..."
                />
                <h4 className="product-title">KSL 01</h4>
                <div className="row">
                  <div className="col-sm-6">
                    <p>Rs.2000/-</p>
                  </div>
                  <div className="col-sm-6 text-end">
                    <p>*****</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 ">
                <img
                  src={require("../assets/images/shoe1.jpg")}
                  className="card-img-top"
                  alt="..."
                />
                <h4 className="product-title">KSL 01</h4>
                <div className="row">
                  <div className="col-sm-6">
                    <p>Rs.2000/-</p>
                  </div>
                  <div className="col-sm-6 text-end">
                    <p>****</p>
                  </div>
                </div>
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

            <div className="row m-5 p-5">
              <div className=" position-absolute top-50 start-50 translate-middle">
                <div className=" text-center">
                  <h6>What's stopping you, designer! </h6>
                </div>
              </div>
            </div>

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

export default Store;
