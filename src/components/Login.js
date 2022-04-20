import React from "react";
import { GoogleOutlined } from "@ant-design/icons";
import "firebase/app";
import { auth } from "../firebase";
import firebase from "firebase/app";

const Login = () => {
  /**
   * login usig auth from firebase api you can check it out to have an overview of whathappening */
  return (
    <>
    <div id="login-page">
      <div id="login-card">
        <h2>Messenger Chat App</h2>
        <div
          className="login-button google"
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
          }
        >
          <GoogleOutlined /> Sign in
        </div>
        </div>
      </div>
    </div>
</>
  );
};

export default Login;
