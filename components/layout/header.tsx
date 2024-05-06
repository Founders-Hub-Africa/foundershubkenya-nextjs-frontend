import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-100">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center">
          <Link href="/">
            <a className="text-xl font-bold">FoundersHub</a>
          </Link>
          {/* Additional navigation items here */}
        </div>
        <div>{/* Authentication links or user info */}</div>
      </nav>
    </header>
  );
};

export default Header;
