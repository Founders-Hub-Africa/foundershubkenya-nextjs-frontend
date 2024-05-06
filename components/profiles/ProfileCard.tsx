import React from "react";

const ProfileCard = ({
  name,
  startupName,
  description,
}: {
  name: string;
  startupName: string;
  description: string;
}) => {
  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h2 className="text-lg font-bold">{name}</h2>
      <p className="text-sm text-gray-600">{startupName}</p>
      <p className="mt-2 text-gray-800">{description}</p>
      {/* Additional profile info here */}
    </div>
  );
};

export default ProfileCard;
