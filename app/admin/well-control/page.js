"use client";

import { useState } from "react";

export default function AdminWellControl() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    content: "",
    mediaUrl: "",
    mediaType: "image",
  });

  // Auto slug generator
  const generateSlug = (text) => {
    return text
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSend = {
      ...form,
      slug: generateSlug(form.title),
    };

    const res = await fetch("/api/well-control", {
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
        description: "",
        content: "",
        mediaUrl: "",
        mediaType: "image",
      });
    } else {
      alert("Something went wrong ❌");
    }
  };

  return (
    <div className="min-h-screen relative z-20 text-black p-10 flex justify-center items-center flex-col bg-gray-100">
      <h1 className="font-heading text-3xl mb-6">
        Create Well Control Article
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md space-y-4 max-w-3xl"
      >
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          required
          className="w-full border p-3 rounded"
        />

        <textarea
          name="description"
          placeholder="Short Description"
          value={form.description}
          onChange={handleChange}
          required
          className="w-full border p-3 rounded"
        />

        <textarea
          name="content"
          placeholder="Full Article Content (HTML allowed)"
          value={form.content}
          onChange={handleChange}
          required
          rows="6"
          className="w-full border p-3 rounded"
        />

        <input
          type="text"
          name="mediaUrl"
          placeholder="Media URL (Image or Video)"
          value={form.mediaUrl}
          onChange={handleChange}
          required
          className="w-full border p-3 rounded"
        />

        <select
          name="mediaType"
          value={form.mediaType}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        >
          <option value="image">Image</option>
          <option value="video">Video</option>
        </select>

        <button
          type="submit"
          className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition"
        >
          Publish Article
        </button>
      </form>
    </div>
  );
}