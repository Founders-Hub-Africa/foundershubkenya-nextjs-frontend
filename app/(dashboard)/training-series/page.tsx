import React from "react";

const FoundersTraining = () => {
  const trainings = [
    {
      name: "Mercy Kamau",
      image: "/path/to/image1.png", // replace with actual image paths
      title: "How to Successfully Join the Founders Fund",
    },
    {
      name: "Apolonia Mukau",
      image: "/path/to/image2.png",
      title: "How to Balance Between Love & Startup",
    },
    {
      name: "Kusiluka Aginiwe",
      image: "/path/to/image3.png",
      title: "How to Use WhatsApp Pay for the Founders Fund",
    },
    {
      name: "Edwin Kamau",
      image: "/path/to/image4.png",
      title: "How to Register at Brela & TRA",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {trainings.map((training, index) => (
          <div
            key={index}
            className="max-w-xs rounded overflow-hidden shadow-lg my-2"
          >
            <img className="w-full" src={training.image} alt={training.title} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{training.name}</div>
              <p className="text-gray-700 text-base">{training.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoundersTraining;
