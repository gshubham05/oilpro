import Link from "next/link";

export default function ArticleCard({ article }) {
  return (
    <Link href={`/well-control/${article.slug}`} className="group">
      <div className="bg-zinc-800/70 backdrop-blur-sm border border-zinc-700 rounded-2xl overflow-hidden shadow-xl hover:scale-105 hover:bg-zinc-700/80 transition duration-300 cursor-pointer">

        {/* Image */}
        {article.mediaType === "image" && article.mediaUrl && (
          <img
            src={article.mediaUrl}
            alt={article.title}
            className="w-full h-48 object-cover"
          />
        )}

        {article.mediaType === "video" && article.mediaUrl && (
          <video
            className="w-full h-48 object-cover"
            muted
          >
            <source src={article.mediaUrl} type="video/mp4" />
          </video>
        )}

        {/* Content */}
        <div className="p-5">
          <h3 className="text-lg font-semibold text-white group-hover:text-yellow-400 transition">
            {article.title}
          </h3>

          {article.description && (
            <p className="text-sm text-gray-400 mt-2 line-clamp-2">
              {article.description}
            </p>
          )}

          <p className="mt-3 text-yellow-500 text-sm font-medium">
            Read Article →
          </p>
        </div>

      </div>
    </Link>
  );
}