import React from "react";
import ForumTable from "./ForumTable";

const ForumSection = ({ title, forums }) => {
  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      <ForumTable forums={forums} />
    </div>
  );
};

export default ForumSection;
