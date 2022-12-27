import { useContext } from "react";
import { authcontext } from "../context/AuthProvider";
const useAuth = () => {
  return useContext(authcontext);
};
export default useAuth;

