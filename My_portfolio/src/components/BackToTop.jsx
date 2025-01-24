import React, { useEffect, useState } from "react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show/hide button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to top smoothly
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Back to Top Button */}
      <button
        onClick={handleBackToTop}
        className={`fixed bottom-5 right-5 ${
          isVisible ? "block" : "hidden"
        } rounded-full bg-slate-800 dark:bg-white dark:text-black dark:hover:bg-gray-700 dark:focus:bg-gray-700 dark:hover:text-white p-3 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-gray-600 hover:shadow-lg focus:bg-slate-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-800 active:shadow-lg`}
        aria-label="Back to top"
      >
        <span className="[&>svg]:w-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="3"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
            />
          </svg>
        </span>
      </button>

      {/* Explanation Section */}
      <div
        className="container mx-auto mt-4 text-center dark:text-white">
          <div>
          <h1>© Noah Sparkes. All Rights Reserved.</h1>
        </div>
      </div>
    </>
  );
};

export default BackToTop;
