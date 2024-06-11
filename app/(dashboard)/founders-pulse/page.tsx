import ChapterList from "@/components/dashboard/founders-pulse/chapter-list";
import Header from "@/components/dashboard/layout/header-no-search";
import React from "react";

const MainContent = () => {
  return (
    <div className="flex-1 p-6 bg-white">
      <Header title="FOUNDERS PULSE" />
      <ChapterList />
    </div>
  );
};

export default MainContent;
