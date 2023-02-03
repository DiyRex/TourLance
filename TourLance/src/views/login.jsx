import React, { useState } from "react";

const LoginSignupForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleLoginSignupToggle = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div style={styles.container}>
      {isLogin ? (
        <LoginForm />
      ) : (
        <SignupForm />
      )}
      <div style={styles.switchButtonContainer}>
        <button style={styles.switchButton} onClick={handleLoginSignupToggle}>
          {isLogin ? "Sign up" : "Login"}
        </button>
      </div>
    </div>
  );
};

const LoginForm = () => (
  <form style={styles.form}>
    <input style={styles.input} type="text" placeholder="Username" />
    <input style={styles.input} type="password" placeholder="Password" />
    <button style={styles.submitButton} type="submit">
      Submit
    </button>
  </form>
);

const SignupForm = () => (
  <form style={styles.form}>
    <input style={styles.input} type="text" placeholder="Username" />
    <input style={styles.input} type="email" placeholder="Email" />
    <input style={styles.input} type="password" placeholder="Password" />
    <button style={styles.submitButton} type="submit">
      Submit
    </button>
  </form>
);

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
    boxShadow: "0 0 10px #ccc",
    borderRadius: 10,
  },
  input: {
    margin: 10,
    padding: 10,
    width: "80%",
    fontSize: 18,
  },
  submitButton: {
    margin: 10,
    padding: 10,
    width: "80%",
    fontSize: 18,
    backgroundColor: "#4CAF50",
    color: "#fff",
    cursor: "pointer",
    borderRadius: 5,
  },
  switchButtonContainer: {
    marginTop: 20,
  },
  switchButton: {
    padding: 10,
    backgroundColor: "#fff",
    color: "#000",
    cursor: "pointer",
    borderRadius: 5,
  },
};

export default LoginSignupForm;
