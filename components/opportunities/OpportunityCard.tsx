import React from "react";
import { Button } from "@/components/ui/button";

const OpportunityCard = ({
  title,
  deadline,
  description,
}: {
  title: string;
  deadline: string;
  description: string;
}) => {
  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-sm text-gray-600">Deadline: {deadline}</p>
      <p className="mt-2 text-gray-800">{description}</p>
      <Button className="mt-4">Apply Now</Button>
    </div>
  );
};

export default OpportunityCard;
