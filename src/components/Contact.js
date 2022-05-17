import React from "react";
import "./Contact.css";
import { Card, Container, Row, Col } from "react-bootstrap";
import fb from "../assets/images/facebook.svg";
import insta from "../assets/images/insta.svg";
import twitter from "../assets/images/twitter.svg";

const Contact = () => {
  return (
    <Container>
      <div className=" form-container col-md-4 mx-auto">
       
          <Card className="shadow  border-0 contact-form shadow-4">
            <Card.Body>
              <Card.Title className="text-center contact-form-title">
                REACH US AT
              </Card.Title>
              <Card.Subtitle className="email-title">
                support@kicksup.com
              </Card.Subtitle>
              <Card.Text className="email-desc">
                for any technical support
              </Card.Text>
              <Card.Subtitle className="email-title">
                info@kicksup.com{" "}
              </Card.Subtitle>
              <Card.Text className="email-desc">
                tor more intormation{" "}
              </Card.Text>
              <Card.Subtitle className="email-title">
                feedback@kicksup.com{" "}
              </Card.Subtitle>
              <Card.Text className="email-desc">
                to send your feedback{" "}
              </Card.Text>
              <Card.Subtitle className="email-title">
                jobs@kicksup.com{" "}
              </Card.Subtitle>
              <Card.Text className="email-desc">to work with us </Card.Text>
            </Card.Body>
          </Card>
        
      </div>
      <div className="text-center social-container ">
        <span className="email-desc">stay in touch</span>
        <div className="social-links">
          <img src={twitter} height={25} width={25} />
          <img src={insta} height={25} width={25} />
          <img src={fb} height={25} width={25} />
        </div>
      </div>
    </Container>
  );
};

export default Contact;
