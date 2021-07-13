import React from "react";
import "../Styles/Services.css";
import { Row, Col, Container, Button } from "reactstrap";
import { MdDesktopWindows, MdPhonelink, MdTabletAndroid } from "react-icons/md";


function Services() {
  return (
    <div className="service_section pad_all_sec">
      <div className="header_text">
        <h1 className="all_sec_title_1">My Services</h1>
        <h2 className="all_sec_sub_title_1">
          Which Services I will Provide for You!
        </h2>
      </div>
      <div className="service_item">
        <Container fluid>
          <Row className="services_point">
            <Col className="services_point_items">
              <a href="">
                <MdPhonelink />
              </a>
              <h3>Web design</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
                nostrum consequuntur reprehenderit molestias praesentium non.{" "}
              </p>
              <Button>Learn More</Button>
            </Col>
            <Col className="services_point_items">
              <a href="">
                <MdDesktopWindows />
              </a>
              <h3>web development</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et
                ratione esse fugit nobis odio placeat? Lorem ipsum dolor sit
                amet.{" "}
              </p>
              <Button>Learn More</Button>
            </Col>
            <Col className="services_point_items">
              <a href="">
                <MdTabletAndroid />
              </a>
              <h3>Mobile Apps</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi,
                earum. Lorem ipsum dolor sit. lorem3 Lorem ipsum dolor sit.{" "}
              </p>
              <Button>Learn More</Button>
            </Col>
            
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Services;
