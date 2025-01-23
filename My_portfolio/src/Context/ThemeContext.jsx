// import React, { createContext, useState, useContext } from "react";

// // Create the ThemeContext
// export const ThemeContext = createContext();

// // Custom hook to use the ThemeContext
// export const useTheme = () => useContext(ThemeContext);

// // ThemeProvider component
// export const ThemeProvider = ({ children }) => {
//   const [theme, setTheme] = useState("light");

//   const toggleTheme = () => {
//     setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };



import React, { createContext, useState, useContext } from "react";

// Create the ThemeContext
export const ThemeContext = createContext();

// Custom hook to use the ThemeContext
export const useTheme = () => {
  const context = useContext(ThemeContext);

  // Ensure the hook is used within a ThemeProvider
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};

// ThemeProvider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  // Validate the theme state
  const validateTheme = (newTheme) => {
    if (newTheme !== "light" && newTheme !== "dark") {
      throw new Error(`Invalid theme value: ${newTheme}. Expected "light" or "dark".`);
    }
  };

  // Toggle theme function with validation
  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      validateTheme(newTheme); // Validate the new theme
      return newTheme;
    });
  };

  // Validate the initial theme
  React.useEffect(() => {
    validateTheme(theme);
  }, [theme]);

  // Ensure the context value is always valid
  const contextValue = React.useMemo(() => ({ theme, toggleTheme }), [theme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

//KK