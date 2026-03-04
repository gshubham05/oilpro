async function getArticles() {
  try {

    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/drilling`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch articles");
    }

    const data = await res.json();
    return data;

  } catch (error) {
    console.error("Error fetching articles:", error);
    return [];
  }
}

export default async function DrillingPage() {

  const articles = await getArticles();

  return (
    <div className="max-w-7xl relative z-20 mt-25 mx-auto p-10">

      <h1 className="text-4xl text-center font-bold mb-10">
        Drilling Articles
      </h1>

      {articles.length === 0 ? (

        <p className="text-center text-gray-500 text-lg">
          No articles are available.
        </p>

      ) : (

        <div className="grid md:grid-cols-3 gap-8">

          {articles.map((article) => (

            <a
              key={article._id}
              href={`/drilling/${article.slug}`}
              className="border rounded-xl overflow-hidden shadow hover:shadow-xl transition"
            >

              <img
                src={article.mediaUrl}
                alt={article.title}
                className="w-full h-52 object-cover"
              />

              <div className="p-5">

                <h2 className="text-xl font-semibold">
                  {article.title}
                </h2>

                <p className="text-gray-600 mt-2">
                  {article.description.slice(0,120)}...
                </p>

              </div>

            </a>

          ))}

        </div>

      )}

    </div>
  );
}