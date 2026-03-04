export default function Hero() {
  return (
    <section className="relative top-0 h-screen w-full overflow-hidden font-manrope">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/videos/rig.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen sm:mt-7   sm:text-center px-6">
        <p className="text-yellow-400 tracking-widest mb-4 text-shadow-md">
          OFFSHORE ENGINEERING & DRILLING
        </p>

        <h1 className="text-white text-6xl md:text-6xl font-bold leading-tight text-shadow-lg">
          Powering
          <br />
          <span className="text-3xl">
            The Future of <span className="text-green-400">Energy</span>{" "}
          </span>
        </h1>

        <p className="text-gray-200 mt-6 max-w-2xl text-shadow-md">
          OilPro delivers world-class offshore drilling and well control
          services with precision, safety, and innovation.
        </p>

        <div className="flex gap-4 mt-8">
          <button className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition">
            Explore Articles
          </button>

          <button className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
