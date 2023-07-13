import React, { useState, useEffect } from "react";
import { getAuth, signInAnonymously } from "firebase/auth";

const SignIn = () => {
  const [userId, setUserId] = useState("");

  const signInAnon = async () => {
    try {
      const auth = getAuth();
      const userCredential = await signInAnonymously(auth);
      const user = userCredential.user;
      //set id in state
      setUserId(user.uid);
      console.log(user.uid);
    } catch (error) {
      console.log("error sign in", error);
    }
  };

  useEffect(() => {
    signInAnon();
  }, []);

  return (
    <div>
      <button onClick={signInAnon}>Sign in</button>
    </div>
  );
};

export default SignIn;
