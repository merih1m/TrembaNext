"use client";

import Input from "@/components/Input";
import { signIn, signOut } from "next-auth/react";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function LoginForm() {
  useEffect(() => {
    signOut({
      redirect: false,
    });
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const login = async () => {
    setLoading(true);

    const login = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (login?.ok) {
      toast.success("Correct login");
      window.location.assign("/");
    } else if (login?.error) {
      toast.error(login?.error);
    }

    setLoading(false);
  };

  return (
    <div className="space-y-5 flex flex-col items-center">
      <Input
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={loading}
        placeholder="Email"
        autoComplete="true"
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
        onClick={login}
        className="px-10 py-3 bg-neutral-900  rounded-full text-white disabled:opacity-70 cursor-pointer hover:bg-neutral-800 active:bg-neutral-700 focus:outline-none focus:ring focus:ring-neutral-300"
      >
        Login
      </button>
    </div>
  );
}
