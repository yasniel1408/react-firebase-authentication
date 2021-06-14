import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import app from "../utils/base";

const SignUp = ({ history }) => {
  const handleSignUp = async (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="content">
      <h1>Sign up</h1>
      <form onSubmit={handleSignUp} className="flex-center">
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button style={{ height: 30 }} type="submit">
          Sign Up
        </button>
        <Link to="/login">SignUp</Link>
      </form>
    </div>
  );
};

export default withRouter(SignUp);
