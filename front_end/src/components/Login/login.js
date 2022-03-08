import React, { useState, useEffect } from "react";
import { Container, Form, Alert } from "react-bootstrap";
import "../Login/login.css";

import { Navigate } from "react-router";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userList, setUserList] = useState([]);
  const [user, setUser] = useState({});
  const [alert, setAlert] = useState({});
  // Effect
  useEffect(() => {
    setUserList([
      {
        usrID: 1,
        email: "admin@gmail.com",
        password: "admin",
        isAdmin: true,
      },
      {
        usrID: 2,
        email: "user@gmail.com",
        password: "user",
        isAdmin: false,
      },
    ]);
  }, []);
  // Function
  const handleAlert = (variant, message) => {
    setAlert({ show: true, variant, message });
    setTimeout(() => setAlert({ show: false }), 2000);
  };

  const loginBtn = () => {
    const user = userList.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) return handleAlert("danger", "Email or Password is Invalid!");

    setUser(user);
  };
  if (user.isAdmin) {
    return <Navigate to="/admin" replace={true} />;
  }

  return (
    <div className="login-background">
      <form action="" className="login-form" id="form-login">
        <Alert
          class="fade alert alert-primary hide"
          show={alert.show}
          variant={alert.variant}
        >
          {alert.message}
        </Alert>
        <h1>Login</h1>
        <div className="form-group">
          <i className="far fa-envelope"></i>
          <input
            type="email"
            placeholder="Email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <i className="fas fa-lock"></i>
          <input
            type="password"
            placeholder="Password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          id="btnLogin"
          type="button"
          className="btn-login"
          onClick={() => loginBtn()}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
