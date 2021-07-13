import React, { Component } from "react";
import "../Styles/Portfolio.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ProtfolioImg1 from "../assest/Images/portfolio/p1.jpg";
import ProtfolioImg2 from "../assest/Images/portfolio/p2.jpg";
import ProtfolioImg3 from "../assest/Images/portfolio/p3.jpg";
//import { Link } from "react-router-dom";
import { AiFillLike } from "react-icons/ai";
import { BiComment, BiLinkExternal } from "react-icons/bi";

class Protfolio extends Component {
  imageClick = () => {
    alert("This is not link");
  };
  render() {
    return (
      <div className="portfolio_sec pad_all_sec">
        <div className="protfolio_header ">
          <h1 className="all_sec_title_1">Protfolios</h1>
          <h3 className="all_sec_sub_title_1">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita,
            vitae.
          </h3>
        </div>
        <div className="main_protfolio">
          <div className="row">
            <div className="col col-md-4 col-lg-4 col-sm-6 portfolio_items">
              <Card>
                <Card.Img
                  variant="top"
                  src={ProtfolioImg1}
                  onClick={this.imageClick}
                />
                <Card.Body>
                  <Card.Title>Our Restrurent</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <div className="card_bottom">
                  <div className="like">
                      <span>
                        <AiFillLike />
                      </span>
                      <small>23</small>
                    </div>
                    <div className="Comment">
                      <span>
                        <BiComment />
                      </span>
                      <small>12</small>
                    </div>
                    <div className="website_link">
                      <span>
                        <BiLinkExternal />
                      </span>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="col col-md-4 col-lg-4 col-sm-6 portfolio_items">
              <Card>
                <Card.Img
                  variant="top"
                  className="overlay"
                  src={ProtfolioImg2}
                  onClick={this.imageClick}
                />
                <Card.Body>
                  <Card.Title>Pizza Hut</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <div className="card_bottom">
                  <div className="like">
                      <span>
                        <AiFillLike />
                      </span>
                      <small>23</small>
                    </div>
                    <div className="Comment">
                      <span>
                        <BiComment />
                      </span>
                      <small>12</small>
                    </div>
                    <div className="website_link">
                      <span>
                        <BiLinkExternal />
                      </span>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="col col-md-4 col-lg-4 col-sm-6 portfolio_items">
              <Card>
                <Card.Img
                  variant="top"
                  src={ProtfolioImg3}
                  onClick={this.imageClick}
                />
                <Card.Body>
                  <Card.Title>Travle Agency</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <div className="card_bottom">
                    <div className="like">
                      <span>
                        <AiFillLike />
                      </span>
                      <small>23</small>
                    </div>
                    <div className="Comment">
                      <span>
                        <BiComment />
                      </span>
                      <small>12</small>
                    </div>
                    <div className="website_link">
                      <span>
                        <BiLinkExternal />
                      </span>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Protfolio;
