import  { useEffect } from "react";
import kursor from "kursor";

const CustomCursor = () => {
  useEffect(() => {
    // Prevent duplicate cursors
    if (!window.kursorInstance) {
      // Check if dark mode is enabled
      const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

      // Initialize the Kursor instance with the appropriate color
      window.kursorInstance = new kursor({
        type: 4,
        color: isDarkMode ? "#fff" : "#000", // White for dark mode, black for light mode
      });
    }
  }, []);

  return null; 
};

export default CustomCursor;


