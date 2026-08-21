import { createContext, useContext, useEffect, useMemo, useState } from "react";

const ThemeContext = createContext(null);

function getInitialTheme() {
  const stored = window.localStorage.getItem("sca-theme");
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);
  const [mode, setMode] = useState(() => window.localStorage.getItem("sca-theme-mode") || window.localStorage.getItem("sca-theme") || "system");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem("sca-theme", theme);
  }, [theme]);

  const value = useMemo(() => ({
    theme,
    mode,
    toggleTheme: () => setTheme((current) => {
      const next = current === "dark" ? "light" : "dark";
      setMode(next);
      window.localStorage.setItem("sca-theme-mode", next);
      return next;
    }),
    setThemeMode: (nextMode) => {
      setMode(nextMode);
      window.localStorage.setItem("sca-theme-mode", nextMode);
      setTheme(nextMode === "system" ? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light") : nextMode);
    },
  }), [theme, mode]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used inside ThemeProvider");
  return context;
}
