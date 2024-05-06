import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle password reset logic here
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
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
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <Button type="submit">Reset Password</Button>
      </div>
    </form>
  );
};

export default ForgotPasswordForm;
