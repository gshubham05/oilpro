import Link from "next/link";

export default function ArticleCard({ article, basePath }) {
  return (
    <Link
      href={`/${basePath}/${article.slug}`}
      className="bg-[#0b0b0b] border border-gray-800 rounded-2xl overflow-hidden 
      hover:border-gray-600 transition-all duration-300 hover:-translate-y-1 
      hover:shadow-2xl block"
    >
      
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={article.mediaUrl}
          alt={article.title}
          className="w-full h-56 object-cover hover:scale-105 transition duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6">

        <h2 className="text-xl font-semibold text-white leading-snug">
          {article.title}
        </h2>

        <p className="text-gray-400 mt-3 text-sm leading-relaxed">
          {article.description.replace(/<[^>]*>?/gm, "").slice(0,120)}...
        </p>

        <div className="mt-4 text-blue-400 text-sm font-medium">
          Read Article →
        </div>

      </div>

    </Link>
  );
}