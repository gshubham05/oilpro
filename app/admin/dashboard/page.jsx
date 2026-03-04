"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles();
  }, []);

  async function fetchArticles() {
    const res = await axios.get("/api/well-control");
    // const data = await res.json();
    console.log(res.data)
    setArticles(res.data);
  }

  async function deleteArticle(id) {
    const token = localStorage.getItem("token");

    await fetch(`/api/wellcontrol/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    fetchArticles();
  }

  return (
    <div className="relative z-20 text-black p-10">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
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
                  href={`/admin/edit/${article._id}`}
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