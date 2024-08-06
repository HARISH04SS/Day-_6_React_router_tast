import React from 'react';
import Card from './Card.js';

const CyberSecurity = () => {
  const articles = [
    {
      title: "Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
      author: "By Jaishree Tomar",
      date: "23 Jul, 2024",
      readTime: "6",
      views: "21222",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp"
    },
    {
      title: "Cybersecurity Vs Ethical Hacking: Top 10 Differences",
      author: "By Tushar Vinocha",
      date: "26 Mar, 2024",
      readTime: "3",
      views: "18306",
      image: "https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner-2048x1152.png"
    },
    {
      title: "What Is Hacking? Types of Hacking & More",
      author: "By Meghana D",
      date: "02 Apr, 2024",
      readTime: "6",
      views: "17117",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp"
    }
  ];

  return (
    <div>
      <h2>Cyber Security</h2>
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

export default CyberSecurity;
