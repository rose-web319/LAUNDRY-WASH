import { useContext, createContext } from "react";

const initialState = {
  user: null,
  setUser: () => null,
  accessToken: null,
  setAccessToken: () => null,
  isAuthenticating: false,
  setIsAuthenticating: () => null,
};

//create the store
export const AuthProviderContext = createContext(initialState);

//hook consume the values provided by the auth provider context
export const useAuth = () => {
  const context = useContext(AuthProviderContext);
  if (context === undefined) {
    throw new Error("UseAuth must be used within an AuthProvider");
  }
  return context;
};