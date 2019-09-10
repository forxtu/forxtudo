import React from "react";

// hooks
import useAuthInfo from "features/auth/hooks/useAuthInfo";

const Home = () => {
  const { logOut } = useAuthInfo();

  return (
    <div>
      <h1>Home</h1>
      <button onClick={logOut}>Logout</button>
    </div>
  );
};

export default Home;
