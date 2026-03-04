"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";

export default function EditArticle() {

  const { id, type } = useParams();   // 🔥 dynamic
  const router = useRouter();

  const [form, setForm] = useState({
    title: "",
    slug: "",
    description: "",
    content: "",
    mediaUrl: "",
    mediaType: "image",
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // ================= FETCH =================

  const fetchData = async () => {
    try {

      const res = await axios.get(`/api/${type}/${id}`);

      const article = res.data;

      setForm({
        title: article.title || "",
        slug: article.slug || "",
        description: article.description || "",
        content: article.content || "",
        mediaUrl: article.mediaUrl || "",
        mediaType: article.mediaType || "image",
      });

      setLoading(false);

    } catch (err) {
      setError("Article not found");
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id && type) fetchData();
  }, [id, type]);

  // ================= HANDLE INPUT =================

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  // ================= UPDATE =================

  async function handleUpdate() {

    try {

      const token = localStorage.getItem("token");

      await axios.put(
        `/api/${type}/${id}`,
        form,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      router.push("/admin/dashboard");

    } catch (err) {

      alert("Update failed");

    }

  }

  if (loading) return <div className="p-10">Loading...</div>;
  if (error) return <div className="p-10 text-red-500">{error}</div>;

  return (
    <div className="p-10 relative z-[99] max-w-3xl mx-auto">

      <h1 className="text-3xl font-bold mb-8">
        Edit {type} Article
      </h1>

      <input
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Title"
        className="border p-3 w-full mb-4"
      />

      <input
        name="slug"
        value={form.slug}
        onChange={handleChange}
        placeholder="Slug"
        className="border p-3 w-full mb-4"
      />

      <textarea
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Description"
        className="border p-3 w-full mb-4"
      />

      <textarea
        name="content"
        value={form.content}
        onChange={handleChange}
        placeholder="Content"
        rows={6}
        className="border p-3 w-full mb-4"
      />

      <input
        name="mediaUrl"
        value={form.mediaUrl}
        onChange={handleChange}
        placeholder="Media URL"
        className="border p-3 w-full mb-4"
      />

      <select
        name="mediaType"
        value={form.mediaType}
        onChange={handleChange}
        className="border p-3 w-full mb-6"
      >
        <option value="image">Image</option>
        <option value="video">Video</option>
      </select>

      <button
        onClick={handleUpdate}
        className="bg-green-600 text-white px-6 py-3 rounded"
      >
        Update Article
      </button>

    </div>
  );
}