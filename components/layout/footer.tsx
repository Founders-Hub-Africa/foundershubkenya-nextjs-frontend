import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-200">
      <div className="container mx-auto p-4">
        <p className="text-center">
          © {new Date().getFullYear()} FoundersHub. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
