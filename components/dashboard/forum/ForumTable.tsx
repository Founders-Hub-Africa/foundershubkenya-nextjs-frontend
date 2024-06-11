import React from "react";
import ForumRow from "./ForumRow";

const ForumTable = ({ forums }) => {
  return (
    <table className="w-full border-collapse">
      <thead>
        <tr className="bg-gray-800 text-white">
          <th className="p-2 text-left">Forum</th>
          <th className="p-2 text-left">Topics</th>
          <th className="p-2 text-left">Posts</th>
          <th className="p-2 text-left">Last Post</th>
        </tr>
      </thead>
      <tbody>
        {forums.map((forum, index) => (
          <ForumRow key={index} {...forum} />
        ))}
      </tbody>
    </table>
  );
};

export default ForumTable;
