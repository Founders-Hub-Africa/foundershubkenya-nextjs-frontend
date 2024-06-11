// src/components/Opportunities.js
import React from "react";

const opportunities = [
  {
    title: "Startup Growth Boost",
    deadline: "24/04",
    image:
      "https://i0.wp.com/bitcoinke.io/wp-content/uploads/2021/07/African-Founders.jpg?resize=390%2C219&ssl=1",
  },
  {
    title: "Bridge Fund",
    deadline: "30/04",
    image:
      "https://lh3.googleusercontent.com/i1KaCkRKYWG1NN_876vjIzO5R1N7ukAO-nCY-NHfCLxJAkGPHnXDS0VVaFwLAnGuTovXIVOil1gJ1O-iZxByatxqv2uct-aixHTQP-_MtKtDryfPTnU=w1500-h800",
  },
  {
    title: "Hustle Fund",
    deadline: "12/05",
    image: "https://technext24.com/wp-content/uploads/2023/04/Startup.jpeg",
  },
  {
    title: "FOYA Grant",
    deadline: "15/06",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToLKSUs2aHij9-iLj_5xWpXrXCTckuutqoHA&s",
  },
];

const Opportunities = () => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Opportunities</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {opportunities.map((opportunity, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={opportunity.image}
              alt={opportunity.title}
              className="w-full h-28 sm:h-32 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xs font-semibold mb-2">
                {opportunity.title}
              </h3>
              <p className="text-gray-500 text-sm">
                Deadline: {opportunity.deadline}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Opportunities;
