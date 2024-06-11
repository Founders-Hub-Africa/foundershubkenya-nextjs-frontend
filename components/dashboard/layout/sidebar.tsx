// src/components/Sidebar.js
import React from "react";
import {
  Home,
  MessageCircle,
  Activity,
  Users,
  List,
  BookOpen,
  Image,
} from "lucide-react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-72  h-screen p-6 flex flex-col justify-between">
      <div>
        <div className="mb-8">
          <h1 className="text-2xl font-bold">FOUNDERS KENYA</h1>
        </div>
        <nav>
          <ul>
            <li className="mb-4">
              <a
                href="/home"
                className="flex items-center p-2 hover:bg-gray-700 rounded"
              >
                <Home className="mr-3" />
                Home
              </a>
            </li>
            <li className="mb-4">
              <Link
                href="/forum"
                className="flex items-center p-2 hover:bg-gray-700 rounded"
              >
                <MessageCircle className="mr-3" />
                Founders Forum
              </Link>
            </li>
            <li className="mb-4">
              <Link
                href="/founders-pulse"
                className="flex items-center p-2 hover:bg-gray-700 rounded"
              >
                <Activity className="mr-3" />
                Founders Pulse
              </Link>
            </li>
            <li className="mb-4">
              <a
                href="/investors-list"
                className="flex items-center p-2 hover:bg-gray-700 rounded"
              >
                <List className="mr-3" />
                Investors List
              </a>
            </li>
            <li className="mb-4">
              <Link
                href="/talent-list"
                className="flex items-center p-2 hover:bg-gray-700 rounded"
              >
                <Users className="mr-3" />
                Talent List
              </Link>
            </li>
            <li className="mb-4">
              <Link
                href="/training-series"
                className="flex items-center p-2 hover:bg-gray-700 rounded"
              >
                <BookOpen className="mr-3" />
                Training Series
              </Link>
            </li>
            <li className="mb-4">
              <Link
                href="/gallery"
                className="flex items-center p-2 hover:bg-gray-700 rounded"
              >
                <Image className="mr-3" />
                Gallery
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
