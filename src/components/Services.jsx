import card_1 from "../assets/card-1.jpg";
import card_2 from "../assets/card-2.jpg";
import card_3 from "../assets/card-3.jpg";
import ServicesCard from "./ServicesCard";

const Services = () => {
  return (
    <section className="px-5 py-5 md:px-10 lg:px-24">
      <h1 className="text-xl text-neutral-800 text-center font-medium mb-4">
        Our Services
      </h1>
      <div className="flex flex-col justify-center items-center md:grid md:grid-cols-3 gap-5">
        <ServicesCard
          title={"Tailor-Made Travel Planning"}
          description={
            "Our expert travel planners work with you to create a customized itinerary based on your preferences and interests."
          }
          img={card_1}
        />
        <ServicesCard
          title={"Curated Tour Packages"}
          description={
            "Explore our exclusive tour packages for unforgettable adventures, relaxation, and cultural immersion."
          }
          img={card_2}
        />
        <ServicesCard
          title={"Convenient Airport Transfers"}
          description={
            "Start and end your journey stress-free with our reliable airport transfers, ensuring comfort and punctuality."
          }
          img={card_3}
        />
      </div>
    </section>
  );
};

export default Services;
