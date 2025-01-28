import React, { useEffect } from "react";

const CustomCursor = () => {
  useEffect(() => {
    // Initialize Kursor
    new kursor({
      type: 1, // You can change this to different types of cursors (see Kursor docs)
    });
  }, []);

  return null; // No need for custom DOM elements, Kursor handles it
};

export default CustomCursor;
