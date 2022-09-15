import { Link } from 'gatsby';
import React from 'react';
import './style.scss';

function PostCard({ post }) {
  const { id, slug, title, excerpt, date, categories } = post;
  return (
    <div className="post-card-wrapper">
      <div className="post-card-left">
        💙
      </div>
      <Link className="post-card" key={id} to={slug}>
        <div className="title">{title}</div>
        <p className="description" dangerouslySetInnerHTML={{ __html: excerpt }} />
        <div className="info">
          <div className="date">{date}</div>
          <div className="categories">
            {categories.map((category) => (
              <div className="category" key={category}>
                {category}
              </div>
            ))}
          </div>
        </div>
      </Link>
        <div className="post-card-left">
            🤍
        </div>
    </div>
  );
}

export default PostCard;
