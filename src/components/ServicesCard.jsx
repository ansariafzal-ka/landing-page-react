const ServicesCard = ({ title, description, img }) => {
  return (
    <div className="border border-l-4 border-l-orange-500 rounded-sm">
      <img
        src={img}
        alt="card-1"
        className="w-full max-h-[200px] object-cover"
      />
      <div className="p-3">
        <h1 className="text-lg font-bold text-neutral-800 mb-2">{title}</h1>
        <p className="text-neutral-800">{description}</p>
      </div>
    </div>
  );
};

export default ServicesCard;
