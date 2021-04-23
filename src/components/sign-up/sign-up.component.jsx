import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import "./sign-up.styles.scss";

class SingUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      user_email: "",
      user_password: "",
      confirm_pass: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ name: "", user_email: "", user_password: "" });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { name, user_email, user_password, confirm_pass } = this.state;
    return (
      <div className="sing-in">
        <h1>I dont have account</h1>
        <span>Sign up with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="name"
            id="name"
            label="Display Name"
            value={name}
            required
            onChange={this.handleChange}
          />

          <FormInput
            type="text"
            name="email"
            id="email"
            label="Email"
            value={user_email}
            required
            onChange={this.handleChange}
          />

          <FormInput
            name="password"
            type="password"
            id="password"
            value={user_password}
            label="Password"
            required
            onChange={this.handleChange}
          />

          <FormInput
            name="confirmPass"
            type="confirmPass"
            id="confirmPass"
            value={confirm_pass}
            label="Confirm Password"
            required
            onChange={this.handleChange}
          />

          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}

export default SingUp;
