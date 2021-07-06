import React from 'react'
const Login = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = props;
  return (
    <section className="login">
      <div className="loginContainer">
        <label>Username</label>
        <input
          type="text"
          placeholder="Enter Email"
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <p className="errorMsg">{emailError}</p>
        <label>Password</label>
        <input
          type="password"
          required
          value={password}
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <p className="errorMsg">{passwordError}</p>
        <div className="btnContainer">
          {hasAccount ? (
            <div>
              <button onClick={handleLogin}>Sign in</button>
              <p>
                Don't have and account ?{" "}
                <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span>
              </p>
            </div>
          ) : (
            <div>
              <button onClick={handleSignup}>Sign Up</button>
              <p>
                Already Have and account ?{" "}
                <span onClick={() => setHasAccount(!hasAccount)}>Sign in </span>
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Login;
