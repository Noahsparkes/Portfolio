
import { useEffect } from "react";
import { useTheme } from "../Context/ThemeContext.jsx";

const ThemeToggle = () => {
  try {
    // Attempt to use the theme context
    const { theme, toggleTheme } = useTheme();

    // Validate the theme value
    if (theme !== "light" && theme !== "dark") {
      throw new Error(`Invalid theme value: ${theme}. Expected "light" or "dark".`);
    }

    // Validate the toggleTheme function
    if (typeof toggleTheme !== "function") {
      throw new Error("toggleTheme is not a function.");
    }

    // Update the data-theme attribute on the <html> element
    useEffect(() => {
      document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    return (
      <button onClick={toggleTheme} style={{ cursor: "pointer" }}>
        {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
      </button>
    );
  } catch (error) {
    // Handle errors gracefully
    console.error("Error in ThemeToggle:", error.message);

    // Render a fallback UI
    return (
      <button style={{ cursor: "pointer", backgroundColor: "red", color: "white" }}>
        Theme Toggle Error
      </button>
    );
  }
};

export default ThemeToggle;

//KK