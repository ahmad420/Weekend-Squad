import React, { useState } from "react";
// import { app } from "../config/firebaseConfig"; // Import your firebase configuration
// import { useAuthState } from "react-firebase-hooks/auth";
import { Container, Form, Button, Alert } from "react-bootstrap";
import "../styles/pages/Login.css"; // Import your custom styles
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  // const auth = getAuth(app); // Initialize the auth object
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [user, loading, error] = useAuthState(auth);
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  const handleEmailLogin = async () => {
    alert("clicked");
    // setEmailError(null);
    // setPasswordError(null);

    // // Email validation
    // if (!email) {
    //   setEmailError("Email is required");
    //   return;
    // } else if (!/\S+@\S+\.\S+/.test(email)) {
    //   setEmailError("Invalid email format");
    //   return;
    // }

    // // Password validation
    // if (!password) {
    //   setPasswordError("Password is required");
    //   return;
    // } else if (password.length < 6) {
    //   setPasswordError("Password must be at least 6 characters");
    //   return;
    // }

    // try {
    //   await signInWithEmailAndPassword(auth, email, password);
    // } catch (error) {
    //   console.error("Error signing in with email and password:", error);
    // }
  };

  return (
    <Container className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        {/* {error && ( */}
        <Alert variant="danger">Login failed. Please try again.</Alert>
        {/* )} */}
        <Form>
          <Form.Group controlId="email">
            <Form.Label className="form-label">Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <p className="error-message">{emailError}</p>}
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label className="form-label">Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError && <p className="error-message">{passwordError}</p>}
          </Form.Group>
          <Button
            variant="primary"
            className="login-button"
            onClick={handleEmailLogin}
          >
            Login
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default Login;
