import { createContext, useState, useEffect } from "react";

export type User = {
  name: string;
  role: string; 
  email: string;
  logged: boolean;
};

type UserContextType = {
  user: User;
  login: (email: string, role: string) => void;
  logout: () => void;
};

const defaultUser: User = {
  name: "",
  role: "",
  email: "",
  logged: false
};

export const UserContext = createContext({} as UserContextType);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>(() => {
    const savedUser = localStorage.getItem("moviego_user");
    return savedUser ? JSON.parse(savedUser) : defaultUser;
  });

  useEffect(() => {
    if (user.logged) {
      localStorage.setItem("moviego_user", JSON.stringify(user));
    } else {
      localStorage.removeItem("moviego_user");
    }
  }, [user]);

  const login = (email: string, role: string) => {
    const newUser = {
      name: email.split("@")[0], 
      role: role, 
      email: email,
      logged: true
    };
    setUser(newUser);
  };

  const logout = () => {
    setUser(defaultUser);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}