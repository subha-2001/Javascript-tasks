import React, { Component } from "react";
import Popup from "./components/Popup";
import axios from 'axios';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phonenumber: "",
      email: "",
      message: "",
      sent: false,
      showPopup: false,
    };
  }

  handleFullName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handlePhoneNumber = (e) => {
    this.setState({
      phonenumber: e.target.value,
    });
  };

  handleMessage = (e) => {
    this.setState({
      message: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form data:', this.state);
    try {
      const res = await axios.post('http://localhost:8000/api/sendEmail', this.state);
      console.log('Response:', res);
      this.setState({
        sent: true,
        showPopup: true,
      });
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
      this.setState({
        sent: false,
        showPopup: true,
      });
    }
  };

  resetForm = () => {
    this.setState({
      name: "",
      phonenumber: "",
      email: "",
      message: "",
      sent: false,
      showPopup: false,
    });
  };

  render() {
    return (
      <>
        <div className="form">
          <form onSubmit={this.handleSubmit}>
            <h1>Contact us</h1>
            <div className="text_field">
              <input type="text" required onChange={this.handleFullName} value={this.state.name} />
              <span></span>
              <label>Full Name</label>
            </div>
            <div className="text_field">
              <input type="number" required onChange={this.handlePhoneNumber} value={this.state.phonenumber} />
              <span></span>
              <label>Phone Number</label>
            </div>
            <div className="text_field">
              <input type="email" required onChange={this.handleEmail} value={this.state.email} />
              <span></span>
              <label>Email</label>
            </div>
            <div className="text_field">
              <textarea required onChange={this.handleMessage} value={this.state.message}></textarea>
              <span className="textarea_span"></span>
              <label className="textarea_label"> Message</label>
            </div>
            <div className="btn">
              <button type="submit">SEND</button>
            </div>
          </form>
        </div>

        {
          this.state.sent && this.state.showPopup
            ? <Popup msg="Message has been sent successfully!" resetForm={this.resetForm} />
            : this.state.showPopup
              ? <Popup msg="Message has not been sent. Something went wrong" resetForm={this.resetForm} />
              : null
        }
      </>
    );
  }
}
