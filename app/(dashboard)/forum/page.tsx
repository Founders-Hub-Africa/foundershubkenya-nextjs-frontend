import React from "react";
import ForumSection from "@/components/dashboard/forum/ForumSection";
import Header from "@/components/dashboard/layout/header-no-search";

const mainForums = [
  {
    forum: "Official Announcements",
    topics: 15,
    posts: 105,
    lastPost: "https://a...",
  },
  { forum: "The Ads Zone", topics: 15, posts: 105, lastPost: "https://a..." },
  { forum: "Startup News", topics: 15, posts: 105, lastPost: "https://a..." },
];

const otherForums = [
  { forum: "Ed-Tech Zone", topics: 15, posts: 105, lastPost: "https://a..." },
  { forum: "Climate Tech", topics: 15, posts: 105, lastPost: "https://a..." },
  { forum: "Health Tech", topics: 15, posts: 105, lastPost: "https://a..." },
  { forum: "Health Tech", topics: 15, posts: 105, lastPost: "https://a..." },
];

const MainContent = () => {
  return (
    <div className="flex-1 p-6 bg-white">
      <Header title="FOUNDERS FORUM" />
      <ForumSection title="MAIN FORUMS" forums={mainForums} />
      <ForumSection title="OTHER FORUMS" forums={otherForums} />
    </div>
  );
};

export default MainContent;
