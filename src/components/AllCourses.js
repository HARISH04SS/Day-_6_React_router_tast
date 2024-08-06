import React from 'react';
import Card from './Card.js';

const AllCourses = () => {
  const fullStackArticles = [
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

  const dataScienceArticles = [
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

  const cyberSecurityArticles = [
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

  const allArticles = [
    ...fullStackArticles,
    ...dataScienceArticles,
    ...cyberSecurityArticles,
  ];

  return (
    <div>
      <h2>All Courses</h2>
      <div className="cards-container">
        {allArticles.map((article, index) => (
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

export default AllCourses;
