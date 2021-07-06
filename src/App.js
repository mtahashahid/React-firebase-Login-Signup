import { useState, useEffect } from "react";
import fire from "./Firebase/Fire";
import Login from "../src/Components/Login/Login";
import "./App.css";
import Hero from "./Components/Hero/Hero";
// import Layout from '../src/Layout/Layout'
function App() {
  // States for the login and Signup
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  // Functions for the login and signup

  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        if (err) {
          switch (err.code) {
            case "auth/invalid-email":
            case "auth/use-disabled":
            case "auth/user-not-found":
              setEmailError(err.message);
              break;
            case "auth/wrong-password":
              setpasswordError(err.message);
              break;
            default:
              break;
          }
        }
      });
  };

  const handleSignup = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        if (err) {
          switch (err.code) {
            case "auth/email-already-exist":
            case "auth/invalid-email":
              setEmailError(err.message);
              break;
            case "auth/weak-password":
              setpasswordError(err.message);
              break;
            default:
              break;
          }
        }
      });
  };

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setpasswordError("");
    setEmailError("");
  };

  const handleLogout = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  });
  return (
    <div className="App">
      {user ? (
        <Hero handleLogout={handleLogout} />
      ) : (
        <Login
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleLogin={handleLogin}
          handleSignup={handleSignup}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
          emailError={emailError}
          passwordError={passwordError}
        />
      )}
    </div>
  );
}

export default App;
