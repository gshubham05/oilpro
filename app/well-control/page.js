import Link from "next/link";
import ArticleCard from "../components/ArticleCard";

async function getArticles() {
  const res = await fetch("http://localhost:3000/api/well-control", {
    cache: "no-store",
  });
  return res.json();
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
