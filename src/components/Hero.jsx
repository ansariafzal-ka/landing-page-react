import HeroImg from "../assets/hero.png";
import NavBar from "./NavBar";

const Hero = () => {
  return (
    <section
      className="bg-cover bg-center w-full h-screen"
      style={{ backgroundImage: `url(${HeroImg})` }}
    >
      <NavBar />
      <div className="p-3 absolute inset-0 flex flex-col justify-center items-center text-center">
        <h1 className="text-3xl font-bold text-white">
          Discover Your Next Adventure
        </h1>
        <p className="text-md sm:text-lg text-white mt-4 text-center max-w-lg">
          Explore breathtaking destinations and find the perfect getaway for
          your next vacation.
        </p>
        <div className="p-3 mt-4 bg-white flex justify-center items-center gap-2 rounded-lg">
          <input
            type="text"
            placeholder="Search Destinations"
            className="outline-none border px-4 py-2 rounded-3xl md:w-[300px]"
          />
          <button className="px-4 py-2 bg-orange-500 text-white font-medium rounded-3xl">
            explore
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
