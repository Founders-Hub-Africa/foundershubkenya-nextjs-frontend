import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const SignUpForm = () => {
  const [userInfo, setUserInfo] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
    startupName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle sign up logic here
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="fullName"
          className="block text-sm font-medium text-gray-700"
        >
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          required
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md"
          onChange={handleChange}
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md"
          onChange={handleChange}
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          required
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md"
          onChange={handleChange}
        />
      </div>
      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-700"
        >
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md"
          onChange={handleChange}
        />
      </div>
      <div>
        <label
          htmlFor="startupName"
          className="block text-sm font-medium text-gray-700"
        >
          Startup Name
        </label>
        <input
          type="text"
          id="startupName"
          name="startupName"
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md"
          onChange={handleChange}
        />
      </div>
      <div>
        <Button type="submit">Sign Up</Button>
      </div>
    </form>
  );
};

export default SignUpForm;
