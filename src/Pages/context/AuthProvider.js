import React, { createContext } from "react";
import useFirebase from "../hooks/useFirebase";

export const authcontext = createContext();
const AuthProvider = ({ children }) => {
  const auth = useFirebase();
  return <authcontext.Provider value={auth}>{children}</authcontext.Provider>;
};

export default AuthProvider;
