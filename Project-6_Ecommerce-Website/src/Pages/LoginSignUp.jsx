import React, { useState } from "react";
import styles from "./CSS/LoginSignUp.module.css";

const LoginSignUp = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className={styles.authContainer}>
      <div className={styles.authCard}>
        <h2>{isLogin ? "Login" : "Sign Up"}</h2>
        
        <form className={styles.authForm}>
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              className={styles.inputField}
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className={styles.inputField}
          />
          <input
            type="password"
            placeholder="Password"
            className={styles.inputField}
          />
          {!isLogin && (
            <input
              type="password"
              placeholder="Confirm Password"
              className={styles.inputField}
            />
          )}

          <button type="submit" className={styles.authButton}>
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <p className={styles.toggleText}>
          {isLogin
            ? "Don't have an account?"
            : "Already have an account?"}{" "}
          <span onClick={toggleForm} className={styles.toggleLink}>
            {isLogin ? "Sign Up" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginSignUp;

