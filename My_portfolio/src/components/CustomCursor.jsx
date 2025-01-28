import React, { useEffect } from "react";

const CustomCursor = () => {
  useEffect(() => {
    if (!window.kursorInstance) {
      window.kursorInstance = new kursor({
        type: 1,
      });
    }
  }, []);

  return null;
};

export default CustomCursor;
