import { useContext } from "react";
import AuthContext from "./authContext";

const useAuth = () => useContext(AuthContext)

const Loginstatus = () => {
  const { user, dispatch } = useAuth();

  if (user === "")
    return (
      <a
        href="#"
        onClick={() => dispatch({ type: "LOGIN", user_name: "melki" })}
      >
        Login
      </a>
    );
  else
    return (
      <div>
        Welcome {user}{" "}
        <a href="#" onClick={() => dispatch({ type: "LOGOUT" })}>
          Logout
        </a>
      </div>
    );
};

export default Loginstatus;
