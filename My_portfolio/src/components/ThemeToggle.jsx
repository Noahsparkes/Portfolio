import React from "react";

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
  };

  return (
    <button onClick={toggleTheme} className="p-2 bg-gray-200 dark:bg-gray-800 rounded">
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
}