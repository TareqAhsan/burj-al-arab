import initializeAuthentication from "../Firebase/Firebase.init";
import { useState } from "react";
import { useEffect } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  getAuth,
  onAuthStateChanged,
} from "firebase/auth";

initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const signInUsingGoogle = () => {
    return signInWithPopup(auth, provider).then((result) => {
      console.log(result.user);
    });
  };
  const logOut = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  return {
    user,
    logOut,
    signInUsingGoogle,
  };
};

export default useFirebase;
