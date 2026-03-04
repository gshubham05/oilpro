import Link from "next/link";

async function getArticles() {
  const res = await fetch("http://localhost:3000/api/well-control", {
    cache: "no-store",
  });
  return res.json();
}

export default async function WellControlPage() {
  const articles = await getArticles();
  console.log(articles)

  return (
    <div className="p-10 mt-20 relative z-22 grid md:grid-cols-3 gap-6">

      {articles.map((item) => (
        <div key={item._id} className="bg-white shadow rounded-lg overflow-hidden">

          {item.mediaType === "image" ? (
            <img src={item.mediaUrl} className="h-48 w-full object-cover" />
          ) : (
            <video src={item.mediaUrl} className="h-48 w-full" />
          )}

          <div className="p-4">
            <h2 className="font-heading text-xl mb-2">
              {item.title}
            </h2>

            <p className="font-body text-gray-600 line-clamp-2">
              {item.description}
            </p>

            <Link
              href={`/well-control/${item.slug}`}
              className="text-blue-600 mt-3 inline-block"
            >
              Read More →
            </Link>
          </div>
        </div>
      ))}

    </div>
  );
}