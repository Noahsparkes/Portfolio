
const About = () => {
  return (
    <section className="p-4">
      <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8 lg:space-x-12">
        {/* Image Div */}
        <div className="image flex-shrink-0 md:w-1/3">
          <img
            src="src/assets/profile_pic.webp"
            alt="profile-pic"
            //className="w-60 h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full object-cover mx-auto md:mx-0"
            className="w-40 h-40 md:w-60 md:h-60 rounded-full object-cover shadow-lg"
          />
        </div>
        {/* Wide-Side Div */}
        <div className="wide-side md:w-2/3 mt-4 md:mt-0">
          <h1 className="text-2xl lg:text-3xl font-bold md:text-left">Hi, It's Noah</h1>
          <h2 className="text-xl lg:text-2xl font-semibold text-gray-700 mt-2 md:text-left">
            I am a Software Developer
          </h2>
          <p className="text-gray-600 mt-4 text-base lg:text-lg md:text-left">
            - Passionate and constantly learning new things about Tech
          </p>
          <div className="social-icons mt-4"></div>
          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 mt-4">
            Say Hello
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

  /*
  Whether it's building efficient applications, automating workflows,
            or diving into DevOps projects, I enjoy tackling challenges that
            push me to learn and grow. If you're looking for someone who's not
            just writing code but also understanding the problem behind it,
            you're in the right place.
  */








/* To Do:

 1. Expand about section
 2. Finish adding scrolling effect.
 3. Add dark mode
 4. Add animations
 5. fix this linter issue,clean up code.
*/