"use client";

import Image from "next/image";

export default function ImageGrid() {
  const image = [
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
    "/images/5.jpeg",
    "/images/6.jpg",
    "/images/7.jpg",
    "/images/8.jpg",
  ];
  return (
    <div className=" py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-10">
        <span className="text-[#e8602e]">Oil Field</span>  Gallery
        </h2>

        <div className="flex flex-wrap -mx-2">
          {image.map((src, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4"
            >
              <div className="overflow-hidden rounded-xl border border-zinc-700 bg-zinc-800/70 backdrop-blur-sm shadow-lg group">
                <Image
                  src={src}
                  alt={`Oilfield ${index + 1}`}
                  width={400}
                  height={300}
                  className="w-full h-56 object-cover group-hover:scale-110 transition duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
