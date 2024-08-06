import React from 'react';

const Card = ({ title, author, date, readTime, views, image }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h3>{title}</h3>
        <p>By {author}</p>
        <p>{date}</p>
        <p>{readTime} Min Read</p>
        <p>👁️ {views}</p>
      </div>
    </div>
  );
};

export default Card;
