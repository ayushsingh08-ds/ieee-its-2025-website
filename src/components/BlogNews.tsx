import React, { useState } from "react";
import {
  Heart,
  MessageCircle,
  Bookmark,
  Share2,
  Eye,
  Calendar,
  User,
} from "lucide-react";
import { BLOG_POSTS_DATA, BLOG_CATEGORIES } from "../data/blogData";
import "./styles/BlogNews.css";

const BlogNews: React.FC = () => {
  const [likedPosts, setLikedPosts] = useState<number[]>([]);
  const [bookmarkedPosts, setBookmarkedPosts] = useState<number[]>([]);

  // Use data from centralized data file (you can also use getRecentBlogPosts() for latest posts)
  const blogPosts = BLOG_POSTS_DATA;

  const handleLike = (postId: number) => {
    setLikedPosts((prev) =>
      prev.includes(postId)
        ? prev.filter((id) => id !== postId)
        : [...prev, postId]
    );
  };

  const handleBookmark = (postId: number) => {
    setBookmarkedPosts((prev) =>
      prev.includes(postId)
        ? prev.filter((id) => id !== postId)
        : [...prev, postId]
    );
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const getCategoryColor = (category: keyof typeof BLOG_CATEGORIES) => {
    const colors = {
      RESEARCH: "#10b981",
      APPLICATIONS: "#3b82f6",
      QUANTUM: "#8b5cf6",
      NETWORKS: "#f59e0b",
      THEORY: "#ec4899",
      TUTORIAL: "#06b6d4",
    };
    return colors[category] || "#6b7280";
  };

  return (
    <section className="blog-news">
      <div className="blog-news-container">
        {/* Section Header */}
        <div className="blog-news-header">
          <div className="section-badge">
            <MessageCircle className="badge-icon" />
            Publications & Research
          </div>
          <h2 className="section-title">
            Latest Research &<span className="title-accent"> Publications</span>
          </h2>
          <p className="section-description">
            Stay updated with cutting-edge research in information theory,
            coding systems, and their applications in machine learning,
            cryptography, and communication networks.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="blog-posts-grid">
          {blogPosts.map((post) => (
            <article key={post.id} className="blog-post-card">
              {/* Post Image */}
              <div className="post-image-container">
                <img src={post.image} alt={post.title} className="post-image" />
                <div
                  className="post-category-badge"
                  style={{ backgroundColor: getCategoryColor(post.category) }}
                >
                  {BLOG_CATEGORIES[post.category]}
                </div>
              </div>

              {/* Post Content */}
              <div className="post-content">
                <div className="post-meta">
                  <div className="post-author">
                    <User className="author-icon" />
                    <span>{post.author}</span>
                  </div>
                  <div className="post-date">
                    <Calendar className="date-icon" />
                    <span>{formatDate(post.date)}</span>
                  </div>
                  <div className="post-read-time">
                    <Eye className="eye-icon" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="post-title">{post.title}</h3>
                <p className="post-excerpt">{post.excerpt}</p>

                {/* Tags */}
                <div className="post-tags">
                  {post.tags.slice(0, 2).map((tag, index) => (
                    <span key={index} className="post-tag">
                      {tag}
                    </span>
                  ))}
                  {post.tags.length > 2 && (
                    <span className="post-tag-more">
                      +{post.tags.length - 2}
                    </span>
                  )}
                </div>

                {/* Post Stats and Actions */}
                <div className="post-footer">
                  <div className="post-stats">
                    <span className="stat-item">
                      <Eye className="stat-icon" />
                      {post.views.toLocaleString()}
                    </span>
                    <span className="stat-item">
                      <MessageCircle className="stat-icon" />
                      {post.comments}
                    </span>
                  </div>

                  <div className="post-actions">
                    <button
                      className={`action-btn ${
                        likedPosts.includes(post.id) ? "liked" : ""
                      }`}
                      onClick={() => handleLike(post.id)}
                      aria-label="Like post"
                    >
                      <Heart className="action-icon" />
                      <span>
                        {post.likes + (likedPosts.includes(post.id) ? 1 : 0)}
                      </span>
                    </button>

                    <button className="action-btn" aria-label="Comment on post">
                      <MessageCircle className="action-icon" />
                    </button>

                    <button
                      className={`action-btn ${
                        bookmarkedPosts.includes(post.id) ? "bookmarked" : ""
                      }`}
                      onClick={() => handleBookmark(post.id)}
                      aria-label="Bookmark post"
                    >
                      <Bookmark className="action-icon" />
                    </button>

                    <button className="action-btn" aria-label="Share post">
                      <Share2 className="action-icon" />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Section Footer */}
        <div className="blog-news-footer">
          <button className="view-all-posts-btn">
            View All Posts
            <MessageCircle className="btn-icon" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogNews;
