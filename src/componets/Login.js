import React, { useContext } from "react";
import { withRouter, Redirect } from "react-router";
import { Link } from "react-router-dom";
import app from "../utils/base.js";
import { AuthContext } from "./Auth";
import img_firebase from "../img/firebase_28dp.png";

const Login = ({ history }) => {

  const handleLogin = async(event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app.auth().signInWithEmailAndPassword(email.value, password.value);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div className="content">
      <img src={img_firebase} alt="Firebase" />
      <h1>Log in </h1>
      <form onSubmit={handleLogin}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button style={{ height: 30 }} type="submit">
          Log in
        </button>
        <Link to="/signup">SignUp</Link>
      </form>
    </div>
  );
};

export default withRouter(Login);
