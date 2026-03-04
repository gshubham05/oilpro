import WellControl from "@/models/WellControl";
import dbConnect from "@/lib/dbConnect";
import ArticleCard from "./components/ArticleCard";
import ImageGrid from "./components/ImageGrid";
import Footer from "./components/Footer";
import Link from "next/link";
import Drilling from "@/models/Drilling";
import Hero from "./components/Hero";

export default async function Home() {
  await dbConnect();

  const articles = await WellControl.find({})
    .sort({ createdAt: -1 })
    .limit(6)
    .lean();
  const jobs = await Drilling.find({}).sort({ createdAt: -1 }).limit(6).lean();
  return (
    <div className="bg-black text-gray-200 overflow-hidden">
    <Hero />

      {/* 🔥 ARTICLES SECTION */}
      <section className="bg-[#101828] my-10 max-w-7xl mx-auto px-20 py-15">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          Latest <span className="text-[#e8602e]">Well Control</span> Articles
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {articles.map((item) => (
            <ArticleCard key={item._id} article={item} />
          ))}
        </div>
      </section>

      {/* 🔥 Job SECTION */}
      <section className="bg-[#101828] max-w-7xl mx-auto px-20 py-15 my-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          Latest <span className="text-[#e8602e]">Job</span> Articles
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {jobs.map((item) => (
            <ArticleCard key={item._id} article={item} />
          ))}
        </div>
      </section>

      {/* 🔥 GALLERY SECTION */}
      <section className="bg-[#101828] mt-10 py-15 px-4">
        <ImageGrid />
      </section>

      {/* 🔥 FOOTER */}
      <Footer />
    </div>
  );
}
