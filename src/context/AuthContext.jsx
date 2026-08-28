import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { api } from "@/lib/api";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    api.get("/auth/me")
      .then((data) => active && setUser(data.user))
      .catch(() => active && setUser(null))
      .finally(() => active && setLoading(false));
    return () => { active = false; };
  }, []);

  const login = useCallback(async (identifier, password) => {
    const { user } = await api.post("/auth/login", { identifier, password });
    setUser(user);
    return user;
  }, []);

  const signup = useCallback(async (details) => {
    const { user } = await api.post("/auth/signup", details);
    setUser(user);
    return user;
  }, []);

  const updateUser = useCallback((changes) => {
    setUser((current) => (current ? { ...current, ...changes } : current));
  }, []);

  const logout = useCallback(async () => {
    try { await api.post("/auth/logout"); } finally { setUser(null); }
  }, []);

  const value = useMemo(
    () => ({ user, loading, login, signup, logout, updateUser, isAuthenticated: !!user }),
    [user, loading, login, signup, logout, updateUser]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
