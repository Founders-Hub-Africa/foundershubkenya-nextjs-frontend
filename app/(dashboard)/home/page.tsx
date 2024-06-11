// src/App.js
import DashboardHeader from "@/components/dashboard/header";
import Opportunities from "@/components/dashboard/home/opportunities";
import React from "react";

function App() {
  return (
    <div className="w-[70vw] p-6 bg-gray-100">
      <DashboardHeader name="Boniface" />
      {/* Other components will go here */}
      <div className="mt-4">
        <div className="mt-8 bg-gray-100">
          <Opportunities />
        </div>
      </div>
    </div>
  );
}

export default App;
