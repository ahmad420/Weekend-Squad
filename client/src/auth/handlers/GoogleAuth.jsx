import React from "react";
import firebase from "firebase/app";
import "firebase/auth";

function GoogleAuth() {
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  const handleGoogleAuth = () => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then((result) => {
        // Handle the successful authentication
      })
      .catch((error) => {
        // Handle the authentication error
      });
  };

  return <button onClick={handleGoogleAuth}>Sign in with Google</button>;
}

export default GoogleAuth;
