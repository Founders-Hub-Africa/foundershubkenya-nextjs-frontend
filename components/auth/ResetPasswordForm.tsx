import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const ResetPasswordForm = () => {
  const [passwords, setPasswords] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPasswords({ ...passwords, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle password update logic here
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="newPassword"
          className="block text-sm font-medium text-gray-700"
        >
          New Password
        </label>
        <input
          type="password"
          id="newPassword"
          name="newPassword"
          required
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md"
          onChange={handleChange}
        />
      </div>
      <div>
        <label
          htmlFor="confirmPassword"
          className="block text-sm font-medium text-gray-700"
        >
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          required
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md"
          onChange={handleChange}
        />
      </div>
      <div>
        <Button type="submit">Update Password</Button>
      </div>
    </form>
  );
};

export default ResetPasswordForm;
