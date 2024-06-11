"use client";
// src/components/Gallery.js
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const galleryItems = [
  {
    title: "Founders Awards 2023",
    date: "24/04",
    image: "path/to/founders-awards-2023.jpg",
  },
  {
    title: "Founders Meet 2023",
    date: "24/04",
    image: "path/to/founders-meet-2023.jpg",
  },
];

const Gallery = () => {
  const router = useRouter();
  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <div className="mb-4 flex items-center">
        <button className="mr-2">
          {/* arrow left lucide react icon */}
          <ArrowLeft className="text-gray-500" onClick={() => router.back()} />
        </button>
        <h2 className="text-2xl font-semibold">Founders Gallery</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {galleryItems.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-32 sm:h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-500">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
