import { motion } from "framer-motion";

const ScrollAnimation = () => {
  return (
    <section className="p-4">
      <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8 lg:space-x-12 dark:bg-gray-800">
        {/* Profile Picture with Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="image flex-shrink-0 md:w-1/3"
        >
          <img
            src="src/assets/profile_pic.webp"
            alt="profile-pic"
            className="w-40 h-40 md:w-60 md:h-60 lg:w-72 lg:h-72 rounded-full object-cover shadow-lg mx-auto md:mx-0"
          />
        </motion.div>
        {/* Content Section with Animations */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="wide-side md:w-2/3 mt-4 md:mt-0 text-center md:text-left"
        >
          <h1 className="text-2xl lg:text-3xl font-bold dark:text-white">Hi, It&apos;s Noah 🖥</h1>
          <h2 className="text-xl lg:text-2xl font-semibold text-gray-700 mt-2 dark:text-white">
            I am a Junior Software Developer
          </h2>
          <p className="text-gray-600 mt-4 text-base lg:text-lg dark:text-white">
            - Passionate and constantly learning new things about Tech
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 mt-4 cursor-none" 
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ScrollAnimation;


