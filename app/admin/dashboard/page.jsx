"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function AdminDashboard() {

  const [articles, setArticles] = useState([]);
  const [type, setType] = useState("well-control");

  useEffect(() => {
    fetchArticles();
  }, [type]);

  async function fetchArticles() {

    const res = await axios.get(`/api/${type}`);

    setArticles(res.data);

  }

  async function deleteArticle(id) {

    const token = localStorage.getItem("token");

    await axios.delete(`/api/${type}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    fetchArticles();
  }

  return (
    <div className="relative z-20 text-black p-10">

      <h1 className="text-3xl font-bold mb-8">
        Admin Dashboard
      </h1>

      {/* Tabs */}
      <div className="flex gap-4 mb-6">

        <button
          onClick={() => setType("well-control")}
          className={`px-4 py-2 rounded ${
            type === "well-control"
              ? "bg-yellow-500 text-black"
              : "bg-gray-700 text-white"
          }`}
        >
          Well Control
        </button>

        <button
          onClick={() => setType("drilling")}
          className={`px-4 py-2 rounded ${
            type === "drilling"
              ? "bg-yellow-500 text-black"
              : "bg-gray-700 text-white"
          }`}
        >
          Drilling
        </button>

      </div>

      {/* Table */}

      <table className="w-full border">

        <thead>
          <tr className="bg-gray-200 text-black">
            <th className="p-3">Title</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>

        <tbody className="text-white">

          {articles.map((article) => (

            <tr key={article._id} className="border-t">

              <td className="p-3">{article.title}</td>

              <td className="p-3 space-x-3">

                <a
                  href={`/admin/edit/${type}/${article._id}`}
                  className="bg-blue-500 text-white px-3 py-1 rounded"
                >
                  Edit
                </a>

                <button
                  onClick={() => deleteArticle(article._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}