import React from 'react';
import Card from './Card.js';

const FullStack = () => {
  const articles = [
    {
      title: "Best Full-Stack Development Project Ideas in 2024",
      author: "Isha Sharma",
      date: "23 Jul, 2024",
      readTime: "4",
      views: "21222",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/07/person-front-computer-working-html.jpg"
    },
    {
      title: "How Long Would it Take to Be a Full Stack Developer?",
      author: "Meghana D",
      date: "26 Mar, 2024",
      readTime: "3",
      views: "18306",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/07/how-long-it-would-it-take-to-learn-full-stack-development_-2048x1072.webp"
    },
    {
      title: "7 Unique Web Development Project Ideas for Beginners",
      author: "Lukesh S",
      date: "02 Apr, 2024",
      readTime: "6",
      views: "17117",
      image: "https://www.guvi.in/blog/wp-content/uploads/2024/03/Feature-3.webp"
    }
  ];

  return (
    <div>
      <h2>Full Stack Development</h2>
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

export default FullStack;
