export default function Home() {
  const articles = [
    {
      title: "Article 1",
      image: "https://via.placeholder.com/300",
      description: "This is a short description of article 1.",
    },
    {
      title: "Article 2",
      image: "https://via.placeholder.com/300",
      description: "This is a short description of article 2.",
    },
    {
      title: "Article 3",
      image: "https://via.placeholder.com/300",
      description: "This is a short description of article 3.",
    },
    {
      title: "Article 4",
      image: "https://via.placeholder.com/300",
      description: "This is a short description of article 4.",
    },
    {
      title: "Article 5",
      image: "https://via.placeholder.com/300",
      description: "This is a short description of article 5.",
    },
    {
      title: "Article 6",
      image: "https://via.placeholder.com/300",
      description: "This is a short description of article 6.",
    },
  ];

  return (
    <div className="flex flex-col items-center p-5">
      {articles.map((article, index) => (
        <div
          key={index}
          className="bg-white border border-gray-200 rounded-lg shadow-md m-5 p-5 w-[50%] max-w-[800px] min-w-[300px] text-center"
        >
          <img
            src={article.image}
            alt={article.title}
            className="rounded-lg h-40 w-full object-cover mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
          <p className="text-gray-600">{article.description}</p>
        </div>
      ))}
    </div>
  );
}
