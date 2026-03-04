export async function generateMetadata({ params }) {

    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/well-control`);
    const articles = await res.json();
  
    const article = articles.find(a => a.slug === params.slug);
  
    return {
      title: article.title,
      description: article.description.slice(0,150),
    };
  }

async function getArticle(slug) {

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/well-control`,
      { cache: "no-store" }
    );
  
    const articles = await res.json();
  
    return articles.find((a) => a.slug === slug);
  }
  
  export default async function Article({ params }) {
  
    const article = await getArticle(params.slug);
  
    if (!article) return <h1>Article Not Found</h1>;
  
    return (
  
      <div className="max-w-4xl mx-auto p-10">
  
        <h1 className="text-4xl font-bold mb-6">
          {article.title}
        </h1>
  
        <img
          src={article.mediaUrl}
          className="w-full rounded mb-6"
        />
  
        <div
          dangerouslySetInnerHTML={{ __html: article.description }}
        />
  
      </div>
    );
  }


