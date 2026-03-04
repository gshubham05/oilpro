import WellControl from "@/models/WellControl";
import dbConnect from "@/lib/dbConnect";
import ArticleCard from "./components/ArticleCard";
import ImageGrid from "./components/ImageGrid";
import Footer from "./components/Footer";
import Link from "next/link";

export default async function Home() {
  await dbConnect();

  const articles = await WellControl.find({})
    .sort({ createdAt: -1 })
    .limit(6)
    .lean();

  return (
    <div className="bg-black py-10 text-gray-200 overflow-hidden">
      {/* 🔥 HERO SECTION */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/banner.png"
            className="w-full h-full object-cover opacity-40"
          />
        </div>

        {/* Gradient Glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black"></div>

        <div className="absolute w-[600px] h-[600px] bg-yellow-500/20 blur-[150px] rounded-full"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <p className="text-yellow-500 uppercase tracking-widest text-sm mb-4">
            Offshore Engineering & Drilling
          </p>

          <h1 className="text-4xl md:text-7xl font-bold text-white leading-tight">
            Powering the Future of Energy
          </h1>

          <p className="mt-6 text-gray-300 text-lg max-w-2xl mx-auto">
            OilPro delivers world-class offshore drilling and well control
            services with precision, safety, and innovation.
          </p>

          <div className="mt-10 flex justify-center gap-6">
            <Link
              href="/well-control"
              className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition"
            >
              Explore Articles
            </Link>

            <Link
              href="/contact"
              className="border border-zinc-600 px-8 py-3 rounded-lg hover:bg-white hover:text-black transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* 🔥 ARTICLES SECTION */}
      <section className="bg-[#101828] max-w-7xl mx-auto px-20 py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          Latest <span className="text-[#e8602e]">Well Control</span> Articles
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {articles.map((item) => (
            <ArticleCard key={item._id} article={item} />
          ))}
        </div>
      </section>

      {/* 🔥 GALLERY SECTION */}
      <section className="bg-[#101828] py-10 px-4">
        <ImageGrid />
      </section>

      {/* 🔥 FOOTER */}
      <Footer />
    </div>
  );
}
