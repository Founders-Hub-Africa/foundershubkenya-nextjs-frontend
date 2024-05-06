import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const LoginForm = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md"
          onChange={(e) =>
            setCredentials({ ...credentials, email: e.target.value })
          }
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
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
        />
      </div>
      <div>
        <Button type="submit">Sign In</Button>
      </div>
    </form>
  );
};

export default LoginForm;
