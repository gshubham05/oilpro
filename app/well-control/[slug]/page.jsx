import { notFound } from "next/navigation";
import dbConnect from "@/lib/dbConnect";
import WellControl from "@/models/WellControl";

export async function generateMetadata({ params }) {
  await dbConnect();
  const { slug } = await params;

  const article = await WellControl.findOne({ slug });

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: article.title + " | OilPro",
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      images: [article.mediaUrl],
    },
  };
}

export default async function SingleArticle({ params }) {
  await dbConnect();

  const { slug } = await params;

  const article = await WellControl.findOne({ slug });

  if (!article) {
    notFound();
  }

  const related = await WellControl.find({
    _id: { $ne: article._id },
  }).limit(5);
console.log(related)
return (
  <div className="bg-black mt-20 min-h-screen text-gray-200 px-4 md:px-8 py-10">
    
    {/* Article Container */}
    <div className="max-w-4xl mx-auto">

      {/* Article Card */}
      <div className="bg-zinc-800/70 backdrop-blur-sm p-6 md:p-10 rounded-2xl shadow-xl border border-zinc-700">
        
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          {article.title}
        </h1>

        {/* Description */}
        {article.description && (
          <p className="text-gray-400 mb-6 text-lg">
            {article.description}
          </p>
        )}

        {/* Media Section */}
        {article.mediaType === "image" && article.mediaUrl && (
          <img
            src={article.mediaUrl}
            alt={article.title}
            className="w-full rounded-xl mb-6 object-cover"
          />
        )}

        {article.mediaType === "video" && article.mediaUrl && (
          <video
            controls
            className="w-full rounded-xl mb-6"
          >
            <source src={article.mediaUrl} type="video/mp4" />
          </video>
        )}

        {/* Content */}
        <div
          className="prose prose-invert max-w-none text-gray-300"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </div>


      {/* Related Articles */}
    {/* Related Articles */}
<div className="mt-16 bg-[#101828] px-10 py-4">
  <h2 className="text-2xl font-semibold mb-6 text-white">
  More <span className="text-[#e8602e]">Well Control</span> Articles
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {related.map((item) => (
      <a
        key={item._id}
        href={`/well-control/${item.slug}`}
        className="group"
      >
        <div className="bg-zinc-800/70 backdrop-blur-sm border border-zinc-700 rounded-2xl overflow-hidden shadow-xl hover:bg-zinc-700/80 transition duration-300">

          {/* Image */}
          {item.mediaType === "image" && item.mediaUrl && (
            <img
              src={item.mediaUrl}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
          )}

          {item.mediaType === "video" && item.mediaUrl && (
            <video
              className="w-full h-48 object-cover"
              muted
            >
              <source src={item.mediaUrl} type="video/mp4" />
            </video>
          )}

          {/* Content */}
          <div className="p-5">
            <h3 className="text-lg font-semibold text-white group-hover:text-yellow-400 transition">
              {item.title}
            </h3>

            {item.description && (
              <p className="text-sm text-gray-400 mt-2 line-clamp-2">
                {item.description}
              </p>
            )}
          </div>

        </div>
      </a>
    ))}
  </div>
</div>

    </div>
  </div>
);
}
