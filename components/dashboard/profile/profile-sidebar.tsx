// src/components/ProfileSidebar.js
import React from "react";
import { Settings, User, Bell, CreditCard, LogOut } from "lucide-react";

const ProfileSidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-72 h-screen p-10 flex flex-col justify-between">
      <div>
        <div className="flex flex-col justify-center items-center mb-8">
          <div className="w-16 h-16 bg-gray-600 rounded-full mr-4"></div>
          <div>
            <h2 className="text-lg font-semibold">Boniface Wayne</h2>
            <p className="text-gray-400">Founder : Africa One</p>
            <p className="text-gray-400">3 Months</p>
          </div>
        </div>
        <nav>
          <ul>
            <li className="mb-4">
              <a
                href="#"
                className="flex items-center p-2 hover:bg-gray-700 rounded"
              >
                <Settings className="mr-3" />
                Settings
              </a>
            </li>
            <li className="mb-4">
              <a
                href="#"
                className="flex items-center p-2 hover:bg-gray-700 rounded"
              >
                <User className="mr-3" />
                Startup Profile
              </a>
            </li>
            <li className="mb-4">
              <a
                href="#"
                className="flex items-center p-2 hover:bg-gray-700 rounded"
              >
                <Bell className="mr-3" />
                Notifications
              </a>
            </li>
            <li className="mb-4">
              <a
                href="#"
                className="flex items-center p-2 hover:bg-gray-700 rounded"
              >
                <CreditCard className="mr-3" />
                Payments
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <a href="#" className="flex items-center p-2 hover:bg-gray-700 rounded">
          <LogOut className="mr-3" />
          Log Out
        </a>
      </div>
    </div>
  );
};

export default ProfileSidebar;
