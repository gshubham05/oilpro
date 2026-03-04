import dbConnect from "@/lib/dbConnect";
import WellControl from "@/models/WellControl";
import Drilling from "@/models/Drilling";

export default async function sitemap() {

  await dbConnect();

  const wellControlArticles = await WellControl.find();
  const drillingArticles = await Drilling.find();

  const wellControlUrls = wellControlArticles.map((article) => ({
    url: `http://localhost:3000/well-control/${article.slug}`,
    lastModified: article.createdAt,
  }));

  const drillingUrls = drillingArticles.map((article) => ({
    url: `http://localhost:3000/drilling/${article.slug}`,
    lastModified: article.createdAt,
  }));

  return [
    {
      url: "https://oilpro.codewareit.in",
      lastModified: new Date(),
    },
    {
      url: "https://oilpro.codewareit.in/well-control",
      lastModified: new Date(),
    },
    {
      url: "https://oilpro.codewareit.in/drilling",
      lastModified: new Date(),
    },

    ...wellControlUrls,
    ...drillingUrls,
  ];
}