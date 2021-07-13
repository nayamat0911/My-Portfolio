import React, { Component } from "react";
import "../Styles/Contact.css";
//import Card from 'react-bootstrap';
import { FiPhoneCall, FiMail } from "react-icons/fi";

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      subject: "",
      text: "",
    };
  }
  changeHandaler = (event) => {
    const name_in = event.target.name;
    const name_all = event.target.value;
    this.setState({ [name_in]: name_all });
  };
  onSubmitHendaler = () => {
    alert(this.state.name);
  };
  render() {
    return (
      <div className="contact_section pad_all_sec">
        <div className="contact_title">
          <h1 className="all_sec_title_1 ">Contact Me</h1>
          <h2 className="all_sec_sub_title_1 some_sub_title">
            For Any Others Information I help You
          </h2>
          <p>{this.state.name}</p>
          <p>{this.state.subject}</p>
          <p>{this.state.text}</p>
        </div>
        <div className="contact_into">
          <div className="contact_address">
            <div className="row ">
              <div className="col col-md-4 address_one_info">
                <a href="">
                  <FiPhoneCall />
                </a>
                <label>Call now!</label>
                <br />

                <a href="">
                  <FiMail />
                </a>
                <label>Email me</label>
              </div>
              <div className="col col-md-7 contact_form">
                <form onSubmit={this.onSubmitHendaler}>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input
                      type="email"
                      onChange={this.changeHandaler}
                      name="name"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                      required
                    />
                    <small id="emailHelp" class="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small>
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Subject</label>
                    <input
                      onChange={this.changeHandaler}
                      type="text"
                      name="subject"
                      class="form-control"
                      id="exampleInputSubject"
                      placeholder="Subject"
                    />
                  </div>

                  <label class="form-check-label" for="exampleCheck1">
                    Massage
                  </label>
                  <br />
                  <textarea
                    onChange={this.changeHandaler}
                    name="text"
                    id=""
                    cols="30"
                    rows="3"
                  ></textarea>
                  <br />
                  <br />

                  <button type="submit" class="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
