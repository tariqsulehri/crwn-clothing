import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import "./sign-up.styles.scss";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

class SingUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("password don't matched......");
      return;
    }

    try {
      console.log(email, password);

      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sing-in">
        <h1>I dont have account</h1>
        <span>Sign up with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            id="displayName"
            label="Display Name"
            value={displayName}
            required
            onChange={this.handleChange}
          />

          <FormInput
            type="text"
            name="email"
            id="email"
            label="Email"
            value={email}
            required
            onChange={this.handleChange}
          />

          <FormInput
            name="password"
            type="password"
            id="password"
            value={password}
            label="Password"
            required
            onChange={this.handleChange}
          />

          <FormInput
            name="confirmPassword"
            type="password"
            id="confirmPassword"
            value={confirmPassword}
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
