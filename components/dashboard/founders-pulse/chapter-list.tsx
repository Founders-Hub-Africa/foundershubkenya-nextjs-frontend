import React from "react";
import ChapterItem from "./chapter-item";

const chapters = [
  {
    title: "Chapter 15: Hydrotech Company",
    introduction: "Introduction",
    publishedDate: "Apr 18, 2024",
    readTime: "4 min read",
    status: "",
  },
  {
    title: "Chapter 14: Arena Company",
    introduction: "Introduction",
    publishedDate: "Apr 9, 2024",
    readTime: "5 min read",
    status: "",
  },
  {
    title: "Chapter 13: Drimhomz Company",
    introduction: "Introduction",
    publishedDate: "Apr 4, 2024",
    readTime: "4 min read",
    status: "Unpublished changes",
  },
  {
    title: "Chapter 12: Neurotech Company",
    introduction: "Introduction",
    publishedDate: "Mar 25, 2024",
    readTime: "5 min read",
    status: "",
  },
  {
    title: "Chapter 11: Jollie Pads Company",
    introduction: "Introduction",
    publishedDate: "Mar 18, 2024",
    readTime: "4 min read",
    status: "",
  },
  {
    title: "Chapter 10: TFS Company",
    introduction: "Introduction",
    publishedDate: "Mar 10, 2024",
    readTime: "3 min read",
    status: "",
  },
];

const ChapterList = () => {
  return (
    <div>
      {chapters.map((chapter, index) => (
        <ChapterItem key={index} {...chapter} />
      ))}
    </div>
  );
};

export default ChapterList;
