import axios from "axios";
import React from "react";
import { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios
      .post("http://localhost:5000/auth/login", data)
      .then((result) => {
        console.log(result.data);
        localStorage.setItem("token", result.data.token);
        navigate("/home");
      });
  };

  return (
    <div className="login">
      <h1>se connecter</h1>
      <form onSubmit={handleSubmit}>
        <span>
          <label>Email:</label>
          <input
            type="email"
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </span>
        <span>
          <label>Password:</label>
          <input
            type="password"
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
        </span>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
