import React from "react";

// hooks
import useAuthInfo from "features/auth/hooks/useAuthInfo";

const Auth = () => {
  const { userAuthInfo, setUserAuthInfoHandler, logIn, signUp } = useAuthInfo();

  return (
    <div>
      <form>
        <div>
          <input
            value={userAuthInfo.email}
            onChange={setUserAuthInfoHandler}
            type="email"
            name="email"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div>
          <input
            value={userAuthInfo.password}
            onChange={setUserAuthInfoHandler}
            type="password"
            name="password"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <button type="submit" onClick={logIn}>
          Login
        </button>
        <button onClick={signUp}>Signup</button>
      </form>
    </div>
  );
};

export default Auth;
