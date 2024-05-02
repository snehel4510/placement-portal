// components/LoginForm.tsx

import { useState } from "react";
import { useRouter } from "next/router";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function LoginForm() {
  const router = useRouter();
  const [enroll, setEnroll] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ enroll, password }),
      });

      if (response.ok) {
        const data = await response.json();
        router.push("/drives"); // Redirect to dashboard on successful login
      } else {
        const data = await response.json();
        setError(data.message);
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setError("An error occurred while logging in. Please try again.");
    }
  };

  return (
    <div className="mx-auto max-w-md">
      <h2 className="mb-4 text-2xl font-semibold">Login</h2>
      {error && <p className="mb-4 text-red-500">{error}</p>}
      <div className="space-y-4">
        <Input
          //   label="Enrollment Number"
          value={enroll}
          onChange={(e) => setEnroll(e.target.value)}
        />
        <Input
          //   label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleLogin} className="w-full">
          Login
        </Button>
      </div>
    </div>
  );
}
