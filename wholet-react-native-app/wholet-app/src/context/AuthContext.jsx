import React, { createContext, useContext, useMemo, useState } from "react";
import { mockUser } from "../data/mockData";

// Frontend-only auth/session state — no network calls. Wire this up to a
// real backend by replacing the login/signup/logout implementations.
const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(mockUser);

  const value = useMemo(
    () => ({
      isAuthenticated,
      user,
      login: async (_email, _password) => {
        setIsAuthenticated(true);
        return { success: true };
      },
      signUp: async (form) => {
        setUser((u) => ({ ...u, ...form }));
        setIsAuthenticated(true);
        return { success: true };
      },
      logout: () => setIsAuthenticated(false),
      updateUser: (patch) => setUser((u) => ({ ...u, ...patch })),
    }),
    [isAuthenticated, user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within an AuthProvider");
  return ctx;
};
