
import React, { useState } from "react";
import '../styles/Login.css'

const LoginSignupForm = () => {
  const [form, setForm] = useState("login");
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fullName, username, email, password, contactNumber);
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        {form === "login" ? (
          <>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              /><br/><br/>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              /><br/><br/>
              <button type="submit">Submit</button><br/><br/>
            </form>
            <p onClick={() => setForm("signup")}>
              Not a member? Sign Up
            </p>
          </>
        ) : (
          <>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              /><br/><br/>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              /><br/><br/>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              /><br/><br/>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              /><br/><br/>
              <input
                type="text"
                placeholder="Contact Number"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
              /><br/><br/>
              <button type="submit">Submit</button><br/><br/>
            </form>
            <p onClick={() => setForm("login")}>
              Already a member? Login
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginSignupForm;
