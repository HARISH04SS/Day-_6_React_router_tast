import React from 'react';
import Card from './Card.js';

const DataScience = () => {
  const articles = [
    {
      title: "Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
      author: "Isha Sharma",
      date: "23 Jul, 2024",
      readTime: "6",
      views: "21222",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp"
    },
    {
      title: "12 Real-World Data Science Examples: Power Of Data Science",
      author: "By Lukesh S",
      date: "26 Mar, 2024",
      readTime: "3",
      views: "18306",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/07/Real-World-Data-Science-Examples-2048x1072.webp"
    },
    {
      title: "Can A Commerce Student Do Data Science?",
      author: "By Saakshi Priyadarshini",
      date: "02 Apr, 2024",
      readTime: "6",
      views: "17117",
      image: "https://www.guvi.in/blog/wp-content/uploads/2022/06/5.-data-science-2048x1072.png"
    }
  ];

  return (
    <div>
      <h2>Data Science</h2>
      <div className="cards-container">
        {articles.map((article, index) => (
          <Card
            key={index}
            title={article.title}
            author={article.author}
            date={article.date}
            readTime={article.readTime}
            views={article.views}
            image={article.image}
          />
        ))}
      </div>
    </div>
  );
};

export default DataScience;
