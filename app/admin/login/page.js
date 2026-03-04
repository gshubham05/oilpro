"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function AdminLogin() {

  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState("");

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e) {

    e.preventDefault();
    setError("");

    try {

      const res = await axios.post("/api/admin/login", form);

      if (res.data.success) {
        router.push("/admin/dashboard");
      }

    } catch (err) {

      setError(err.response?.data?.message || "Login failed");

    }

  }

  return (
    <div className="min-h-screen relative z-20 flex items-center justify-center bg-black text-white">

      <div className="bg-zinc-900 p-10 rounded-xl w-[400px] border border-zinc-800">

        <h1 className="text-3xl font-bold mb-6 text-center">
          Admin Login
        </h1>

        {error && (
          <p className="text-red-500 mb-4 text-center">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <input
            type="text"
            name="email"
            placeholder="Admin Email"
            value={form.email}
            onChange={handleChange}
            className="p-3 rounded bg-black border border-zinc-700"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="p-3 rounded bg-black border border-zinc-700"
            required
          />

          <button
            type="submit"
            className="bg-yellow-500 text-black font-semibold py-3 rounded hover:bg-yellow-400 transition"
          >
            Login
          </button>

        </form>

      </div>

    </div>
  );
}