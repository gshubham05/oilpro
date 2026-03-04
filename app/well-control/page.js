import Link from "next/link";
import ArticleCard from "../components/ArticleCard";
import axios from "axios";

async function getArticles() {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/api/well-control`);
  return res.data;
}

export default async function WellControlPage() {
  const articles = await getArticles();
  console.log(articles);

  return (
    <div className="grid md:grid-cols-3 gap-8 p-10 mt-20 relative z-22">
      {articles.map((article) => (
        <ArticleCard
          key={article._id}
          article={article}
          basePath="well-control"
        />
      ))}
    </div>
  );
}
