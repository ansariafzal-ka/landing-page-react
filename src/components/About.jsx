import about_img from "../assets/about-us.jpg";

const About = () => {
  return (
    <section className="bg-gray-100 px-5 py-6 md:py-12 lg:px-24 mt-5 -100 flex flex-col justify-center items-center lg:flex-row md:gap-8">
      <img src={about_img} alt="beach" className="w-full mb-5 lg:w-[650px]" />
      <div className="flex flex-col gap-y-3">
        <h4 className="font-medium text-lg text-orange-500">About Us</h4>
        <h1 className="text-3xl font-bold text-neutral-800">
          The Best And Most trusted service
        </h1>
        <p className="text-neutral-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores magni
          excepturi culpa cupiditate porro voluptatem quos iste debitis
          molestias voluptate iure incidunt saepe.
        </p>
        <button className="px-4 py-2 bg-orange-500 text-white font-medium rounded-3xl">
          learn more
        </button>
        <div className="mt-2 flex justify-between items-center gap-5">
          <div className="p-2 border border-l-4 border-l-orange-500 rounded-lg">
            <h3 className="text-lg font-medium text-orange-500">200+</h3>
            <p className="text-neutral-800">Customers & Partners</p>
          </div>
          <div className="p-2 border border-l-4 border-l-orange-500 rounded-lg">
            <h3 className="text-lg font-medium text-orange-500">200+</h3>
            <p className="text-neutral-800">Customers & Partners</p>
          </div>
          <div className="p-2 border border-l-4 border-l-orange-500 rounded-lg">
            <h3 className="text-lg font-medium text-orange-500">200+</h3>
            <p className="text-neutral-800">Customers & Partners</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
