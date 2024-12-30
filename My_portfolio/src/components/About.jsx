const About = () => {
  return (
    <section className="p-4">
      <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
        {/* Image Div */}
        <div className="image">
          <img
            src="src/assets/profile_pic.webp"
            alt="profile-pic"
            className="w-60 h-60 rounded-full object-cover"
          />
        </div>
        {/* Wide-Side Div */}
        <div className="wide-side text-center md:text-left mt-4 md:mt-0">
          <h1 className="text-2xl font-bold">Hi, It's Noah</h1>
          <h2 className="text-xl font-semibold text-gray-700 mt-2">
            I am a Software Developer
          </h2>
          <p className="text-gray-600 mt-4">
            Whether it's building efficient applications, automating workflows,
            or diving into DevOps projects, I enjoy tackling challenges that
            push me to learn and grow. If you're looking for someone who's not
            just writing code but also understanding the problem behind it,
            you're in the right place.
          </p>
          <div className="social-icons mt-4"></div>
          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 mt-4">
            Hire me
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;

  

  /* rurther about section:
  I’m at the beginning of my software development journey, 
  but I’ve already gained a lot of hands-on experience through personal projects and self-guided learning. 
  From building simple web applications to experimenting with DevOps concepts, 
  I’m constantly seeking new challenges that push me to think critically and improve my craft.*/