"use client";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const Header = ({ title }: { title: string }) => {
  const router = useRouter();
  return (
    <div className="mb-6 flex flex-row ">
      <ArrowLeft
        className="text-gray-500 mr-10"
        onClick={() => router.back()}
      />
      <h1 className="text-xl font-semibold">{title}</h1>
    </div>
  );
};

export default Header;
