import { useState, MouseEvent, ChangeEvent } from "react";

// utils
import authConfig, { db } from "config/Auth";

type UserAuthInfo = {
  email: string;
  password: string;
};

const useAuthInfo = () => {
  const [userAuthInfo, setUserAuthInfo] = useState<UserAuthInfo>({
    email: "",
    password: ""
  });

  const setUserAuthInfoHandler = (e: ChangeEvent) => {
    setUserAuthInfo({
      ...userAuthInfo,
      [(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement)
        .value
    });
  };

  const logIn = (e: MouseEvent) => {
    e.preventDefault();
    authConfig
      .auth()
      .signInWithEmailAndPassword(userAuthInfo.email, userAuthInfo.password)
      .then(u => {})
      .catch(error => {
        console.log(error);
      });
  };

  const signUp = (e: MouseEvent) => {
    e.preventDefault();
    authConfig
      .auth()
      .createUserWithEmailAndPassword(userAuthInfo.email, userAuthInfo.password)
      .then(u => {
        db.collection("users").add({
          email: userAuthInfo.email,
          userId: u.user && u.user.uid
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  const logOut = () => {
    authConfig.auth().signOut();
  };

  return {
    userAuthInfo,
    setUserAuthInfoHandler,
    logIn,
    signUp,
    logOut
  };
};

export default useAuthInfo;
