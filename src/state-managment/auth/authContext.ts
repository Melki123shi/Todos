import React from "react";
import { AuthAction } from "./AuthProvider";

interface authContextType {
  user: string;
  dispatch: React.Dispatch<AuthAction>;
}

const AuthContext = React.createContext<authContextType>({} as authContextType);
export default AuthContext;
