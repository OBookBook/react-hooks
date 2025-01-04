import { createContext, ReactNode, useContext, useState } from "react";

type User = {
  id: string;
  username: string;
  email: string;
};

interface AuthContextType {
  user: User | null;
  login: (userInfo: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used with in an AuthProvider");
  }
  return context;
};

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const login = (userInfo: User) => {
    if (
      userInfo.username === "testUser" &&
      userInfo.email === "test@gmail.com"
    ) {
      setUser(userInfo);
    } else {
      console.log("can't  logged in");
    }
  };

  const logout = () => {
    setUser(null);
  };

  const contextValut = {
    user,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValut}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
