"use client";

import { useState } from "react";

export default function AdminArticleForm() {

  const [form, setForm] = useState({
    title: "",
    media: "",
    description: "",
  });

  const generateSlug = (text) => {
    return text
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSend = {
      title: form.title,
      slug: generateSlug(form.title),
      mediaUrl: form.media,
      description: form.description,
    };

    const res = await fetch("/api/drilling", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    });

    if (res.ok) {
      alert("Article Created Successfully ✅");

      setForm({
        title: "",
        media: "",
        description: "",
      });

    } else {
      alert("Something went wrong ❌");
    }
  };

  return (
    <div className="min-h-screen mt-25 relative z-20 text-black flex justify-center items-center bg-gray-100 p-6">

      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-2xl">

        <h1 className="text-3xl font-bold mb-6 text-center">
          Create Job Post
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Title */}
          <input
            type="text"
            name="title"
            placeholder="Article Title"
            value={form.title}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded"
          />

          {/* Media URL */}
          <input
            type="text"
            name="media"
            placeholder="Image URL or YouTube Link"
            value={form.media}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded"
          />

          {/* Description */}
          <textarea
            name="description"
            placeholder="Article Description (HTML allowed)"
            value={form.description}
            onChange={handleChange}
            rows="8"
            required
            className="w-full border p-3 rounded"
          />

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition"
          >
            Publish Article
          </button>

        </form>
      </div>
    </div>
  );
}