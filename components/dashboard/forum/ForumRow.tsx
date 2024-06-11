import React from "react";

const ForumRow = ({ forum, topics, posts, lastPost }) => {
  return (
    <tr className="bg-green-100">
      <td className="p-2">{forum}</td>
      <td className="p-2">{topics}</td>
      <td className="p-2">{posts}</td>
      <td className="p-2 text-blue-500">
        <a href={lastPost}>{lastPost}</a>
      </td>
    </tr>
  );
};

export default ForumRow;
