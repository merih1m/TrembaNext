"use client";

import Input from "@/components/Input";
import axios from "axios";
import { signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function RegisterForm() {
  useEffect(() => {
    signOut({
      redirect: false,
    });
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const register = async () => {
    setLoading(true);
    try {
      await axios.post("/api/register", {
        username,
        email,
        password,
      });

      toast.success("Successfully registered");

      router.push("/sign-in");
    } catch (err: any) {
      console.log(err);
      toast.error(err?.response?.data || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-3 flex flex-col items-center">
      <Input
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        disabled={loading}
        type="text"
        placeholder="Username"
      />
      <Input
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={loading}
        type={email}
        placeholder="Email"
      />
      <Input
        label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        disabled={loading}
        type="password"
        placeholder="Password"
      />
      <button
        onClick={register}
        className="px-10 py-3 bg-neutral-900 rounded-full text-white disabled:opacity-70 cursor-pointer hover:bg-neutral-800 active:bg-neutral-700 focus:outline-none focus:ring focus:ring-neutral-300"
      >
        Register
      </button>
    </div>
  );
}
