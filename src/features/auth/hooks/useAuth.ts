import { useEffect } from "react";

// hooks
import useLocalStorage from "hooks/useLocalStorage";

// utils
import authConfig from "config/Auth";

const useAuth = () => {
  const {
    item: authUser,
    setItem: setAuthUser,
    removeItem: removeAuthUser
  } = useLocalStorage("authUser");

  useEffect(() => {
    authListener();
  }, []);

  const authListener = () => {
    authConfig.auth().onAuthStateChanged(user => {
      if (user) {
        setAuthUser("authUser", user.uid);
      } else {
        removeAuthUser("authUser");
      }
    });
  };

  return {
    authUser
  };
};

export default useAuth;
