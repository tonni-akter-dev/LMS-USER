import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import init from "./../Login/Firebase/firebase.init";
init();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsloading] = useState(true);
  const [admin, setAdmin] = useState(false);
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const googleSignIn = () => {
    setIsloading(true);
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        setUser(res.user);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setIsloading(false);
      });
  };
  const registerUser = (email, password, name, navigate) => {
    setIsloading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setError("");
        const newUser = { email, displayName: name };
        setUser(newUser);
        saveUser(email, name, "POST");
        // set name to the firebase
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});
          navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsloading(false));
  };
  const loginUser = (email, password, location, navigate) => {
    setIsloading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setError("");
        const destination = location.state?.from || "/";
        navigate(destination);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const logout = () => {
    setIsloading(true);
    signOut(auth)
      .then(() => {
        setError("");
        setUser({});
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsloading(false));
  };
  // saveuser in database from register
  const saveUser = (email, displayName) => {
    const user = { email, displayName };
    fetch("https://glacial-plateau-86707.herokuapp.com/users", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };
  // admin....verify
  // useEffect(() => {
  //   if (user.email) {
  //     setIsloading(true);
  //     fetch(`https://glacial-plateau-86707.herokuapp.com/users/${user.email}`)
  //       .then((res) => res.json())
  //       .then((data) => setAdmin(data.admin))
  //       .finally(() => {
  //         setIsloading(false);
  //       });
  //   }
  // }, [user.email]);
  
  
  
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsloading(false);
    });
    return () => unsubscribe;
  }, [auth]);
  return {
    user,
    error,
    isLoading,
    googleSignIn,
    registerUser,
    loginUser,
    logout,
    admin,
  };
};

export default useFirebase;
