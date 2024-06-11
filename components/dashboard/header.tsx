// src/components/Header.js
import React from "react";
import { Search } from "lucide-react";

const DashboardHeader = ({ name }: { name: string }) => {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md">
      <div>
        <h2 className="text-xl font-semibold">Welcome again, {name}!</h2>
      </div>
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 border rounded-full w-64"
        />
        <Search className="absolute top-2 right-3 text-gray-500" />
      </div>
    </div>
  );
};

export default DashboardHeader;
