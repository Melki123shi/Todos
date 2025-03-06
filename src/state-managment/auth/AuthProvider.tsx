import { ReactNode, useReducer } from "react"
import AuthContext from "./authContext";


interface LoginAuthAction {
  type: 'LOGIN',
  user_name: string
}

interface LogoutAuthAction {
  type: 'LOGOUT',
}

export type AuthAction = LoginAuthAction | LogoutAuthAction;

const authReducer = (state: string, action: AuthAction): string  => {
  switch (action.type) {
      case 'LOGIN':
          return action.user_name
      case 'LOGOUT':
          return ""
      default:
          return state;
  }
}

interface prop {
    children: ReactNode
}
const AuthProvider = ({children} : prop) => {
  const [user, dispatch] = useReducer(authReducer, "");

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
        {children}
    </AuthContext.Provider>

  )
}

export default AuthProvider