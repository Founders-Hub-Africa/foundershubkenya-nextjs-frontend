// src/components/TalentList.js
import React from "react";

const talents = [
  {
    title: "Developers",
    count: 205,
    image: "path/to/image1.jpg",
  },
  {
    title: "Accountants",
    count: 57,
    image: "path/to/image2.jpg",
  },
  {
    title: "Marketers",
    count: 120,
    image: "path/to/image3.jpg",
  },
  {
    title: "Lawyers",
    count: 42,
    image: "path/to/image4.jpg",
  },
  {
    title: "Graphic Designers",
    count: 205,
    image: "path/to/image5.jpg",
  },
  {
    title: "Sales Reps",
    count: 57,
    image: "path/to/image6.jpg",
  },
  {
    title: "Business Developers",
    count: 2,
    image: "path/to/image7.jpg",
  },
];

const TalentList = () => {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <div className="mb-4 flex items-center">
        <button className="mr-2">
          <img src="path/to/back-icon.png" alt="Back" />
        </button>
        <h2 className="text-2xl font-semibold">Local Talents</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {talents.map((talent, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={talent.image}
              alt={talent.title}
              className="w-full h-32 sm:h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{talent.title}</h3>
              <p className="text-gray-500">{talent.count}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TalentList;
