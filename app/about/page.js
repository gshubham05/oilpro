import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title:
    "About Oil & Gas Drilling Industry | Rigs, Jobs & Oilfield Information",
  description:
    "Learn about drilling rigs, the oil and gas industry, oilfield job positions, and how drilling operations work. Explore career opportunities and knowledge about the global oil industry.",
};

export default function AboutPage() {
  return (
    <div className="relative px-4 sm:px-6 lg:px-10 py-10">
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

          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            About <span className="text-yellow-400">Oil & Gas</span> Drilling
            Industry
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
      {/* Navy Blue Container */}
      <div className="max-w-7xl mx-auto bg-[#101828] rounded-xl shadow-xl p-6 sm:p-10">
        {/* Title */}

        {/* Intro */}
        <p className="text-gray-200 text-base sm:text-lg leading-relaxed mb-8">
          Welcome to our{" "}
          <span className="text-yellow-400 font-semibold">
            Drilling Information Platform
          </span>
          . This website helps people understand the{" "}
          <span className="text-yellow-400">oil and gas industry</span>,
          drilling rigs, oilfield job roles, and drilling operations. Whether
          you are a
          <span className="text-orange-400">
            {" "}
            student, job seeker, or professional
          </span>
          , this platform provides valuable knowledge about the drilling sector.
        </p>

        {/* Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <Image
            src="/rigs/offshore-rig.jpg"
            alt="Offshore drilling rig in ocean"
            width={600}
            height={400}
            className="rounded-lg hover:scale-105 transition duration-300"
          />

          <Image
            src="/rigs/land-rig.jpg"
            alt="Onshore land drilling rig oilfield"
            width={600}
            height={400}
            className="rounded-lg hover:scale-105 transition duration-300"
          />
        </div>

        {/* What is Rig */}
        <h2 className="text-2xl sm:text-3xl font-semibold text-orange-400 mb-4">
          What is a Drilling Rig?
        </h2>

        <p className="text-gray-200 mb-6 leading-relaxed">
          A <span className="text-yellow-400 font-medium">drilling rig</span> is
          a large machine used to drill deep into the earth to extract natural
          resources such as
          <span className="text-yellow-400"> crude oil and natural gas</span>.
          These rigs use powerful drilling equipment, rotating drill bits, and
          drilling fluids to penetrate underground rock formations and reach oil
          reservoirs.
        </p>

        <p className="text-gray-200 mb-10">
          Drilling rigs operate both on{" "}
          <span className="text-yellow-400">land (onshore)</span> and in the
          <span className="text-yellow-400"> ocean (offshore)</span>. Offshore
          rigs are built on large platforms or floating structures to extract
          oil beneath the seabed.
        </p>

        {/* Types of rigs */}
        <h2 className="text-2xl sm:text-3xl font-semibold text-orange-400 mb-4">
          Types of Drilling Rigs
        </h2>

        <ul className="grid sm:grid-cols-2 gap-3 text-gray-200 mb-10 list-disc pl-6">
          <li>Land Rigs (Onshore Drilling)</li>
          <li>Offshore Drilling Rigs</li>
          <li>Jack-Up Rigs</li>
          <li>Semi-Submersible Rigs</li>
          <li>Drillships</li>
        </ul>

        {/* Oil industry */}
        <h2 className="text-2xl sm:text-3xl font-semibold text-orange-400 mb-4">
          What is the Oil & Gas Industry?
        </h2>

        <p className="text-gray-200 mb-6 leading-relaxed">
          The <span className="text-yellow-400">oil and gas industry</span> is
          responsible for exploring, extracting, refining, and distributing
          petroleum resources across the world. It plays a critical role in
          providing energy used in transportation, electricity generation,
          manufacturing, and daily life.
        </p>

        <p className="text-gray-200 mb-10">
          The industry is divided into three sectors:
        </p>

        <ul className="grid sm:grid-cols-3 gap-4 mb-10 text-gray-200">
          <li className="bg-[#132a4a] p-4 rounded-lg">
            <span className="text-yellow-400 font-semibold">Upstream</span>
            <br />
            Exploration and drilling operations
          </li>

          <li className="bg-[#132a4a] p-4 rounded-lg">
            <span className="text-yellow-400 font-semibold">Midstream</span>
            <br />
            Transportation and storage
          </li>

          <li className="bg-[#132a4a] p-4 rounded-lg">
            <span className="text-yellow-400 font-semibold">Downstream</span>
            <br />
            Refining and petroleum products
          </li>
        </ul>

        {/* Learn section */}
        <h2 className="text-2xl sm:text-3xl font-semibold text-orange-400 mb-4">
          What You Will Learn on This Website
        </h2>

        <ul className="grid sm:grid-cols-2 gap-3 text-gray-200 list-disc pl-6">
          <li>Oilfield job roles and responsibilities</li>
          <li>Drilling rig equipment and operations</li>
          <li>Well control concepts</li>
          <li>Career opportunities in the oil industry</li>
          <li>Drilling industry knowledge and updates</li>
        </ul>
      </div>
    </div>
  );
}
