import React from "react";
import "./Main.css";

const Team = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="text-center">
          <h5 className="team-page-title">
            Without bonding and coordination, every project is a failure. Look
            at who makes KICKSUP great. ;)
          </h5>
        </div>
      </div>
      <div className=" row team-container">
        <div className=" col-md ">
          <div className="card shadow col border-0 ">
            <img
              src={require("../assets/images/zidane.jpg")}
              className="card-img-top"
              alt="..."
            />

            <div className="card-body text-center">
              <h5 className="card-title">Zidane</h5>
              <p className="card-text">Leadership & management</p>
              <div className="social-links">
                <img
                  src={require("../assets/images/linkedin.png")}
                  height={25}
                  width={25}
                />
                <img
                  src={require("../assets/images/medium.png")}
                  height={25}
                  width={25}
                />
                <img
                  src={require("../assets/images/facebook.png")}
                  height={25}
                  width={25}
                />
              </div>
            </div>
          </div>
        </div>

        <div className=" col-md ">
          <div className="card shadow  border-0 ">
            <img
              src={require("../assets/images/tonikroos.jpg")}
              className="card-img-top"
              alt="..."
            />

            <div className="card-body text-center">
              <h5 className="card-title">Toni Kroos</h5>
              <p className="card-text">Product developer</p>
              <div className="social-links">
                <img
                  src={require("../assets/images/linkedin.png")}
                  height={25}
                  width={25}
                />

                <img
                  src={require("../assets/images/facebook.png")}
                  height={25}
                  width={25}
                />
              </div>
            </div>
          </div>
        </div>

        <div className=" col-md ">
          <div className="card shadow  border-0 ">
            <img
              src={require("../assets/images/Iker.jpeg")}
              className="card-img-top"
              alt="..."
            />

            <div className="card-body text-center">
              <h5 className="card-title">Iker Casillas</h5>
              <p className="card-text">Marketing strategy</p>
              <div className="social-links">
                <img
                  src={require("../assets/images/medium.png")}
                  height={25}
                  width={25}
                />
                <img
                  src={require("../assets/images/facebook.png")}
                  height={25}
                  width={25}
                />
              </div>
            </div>
          </div>
        </div>

        <div className=" col-md ">
          <div className="card shadow  border-0 ">
            <img
              src={require("../assets/images/james.jpg")}
              className="card-img-top"
              alt="..."
            />

            <div className="card-body text-center">
              <h5 className="card-title">James</h5>
              <p className="card-text">Product designer</p>
              <div className="social-links">
                <img
                  src={require("../assets/images/linkedin.png")}
                  height={25}
                  width={25}
                />
                <img
                  src={require("../assets/images/medium.png")}
                  height={25}
                  width={25}
                />
                <img
                  src={require("../assets/images/facebook.png")}
                  height={25}
                  width={25}
                />
              </div>
            </div>
          </div>
        </div>

        <div className=" col-md ">
          <div className="card shadow  border-0 ">
            <img
              src={require("../assets/images/christiano.jpg")}
              className="card-img-top"
              alt="..."
            />

            <div className="card-body text-center">
              <h5 className="card-title">Cristiano</h5>
              <p className="card-text">Financial operations</p>
              <div className="social-links">
                <img
                  src={require("../assets/images/linkedin.png")}
                  height={25}
                  width={25}
                />

                <img
                  src={require("../assets/images/facebook.png")}
                  height={25}
                  width={25}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-center you-text">and You! ;)</h4>
      </div>
    </div>
  );
};

export default Team;
