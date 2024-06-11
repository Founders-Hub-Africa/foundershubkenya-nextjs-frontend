import React from "react";
import { Share2, MoreHorizontal } from "lucide-react";

const ChapterItem = ({
  title,
  introduction,
  publishedDate,
  readTime,
  status,
}: {
  title: string;
  introduction: string;
  publishedDate: string;
  readTime: string;
  status: string;
}) => {
  return (
    <div className="flex flex-col p-4 border-b border-gray-200">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-sm text-gray-600">{introduction}</p>
      <div className="flex items-center justify-between mt-2 text-gray-500">
        <span>
          {publishedDate} · {readTime}
        </span>
        <div className="flex items-center space-x-2">
          {status && <span className="text-red-500">{status}</span>}
          <Share2 className="w-4 h-4 cursor-pointer" />
          <MoreHorizontal className="w-4 h-4 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default ChapterItem;
