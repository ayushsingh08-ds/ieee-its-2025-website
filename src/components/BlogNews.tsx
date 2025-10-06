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
import "./styles/BlogNews.css";

const BlogNews: React.FC = () => {
  const [likedPosts, setLikedPosts] = useState<number[]>([]);
  const [bookmarkedPosts, setBookmarkedPosts] = useState<number[]>([]);

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Autonomous Vehicles: Challenges and Opportunities",
      excerpt:
        "Exploring the latest developments in self-driving technology and the key challenges that researchers and engineers face in creating safer, more efficient autonomous vehicles.",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      author: "Dr. Emily Rodriguez",
      date: "2025-10-28",
      readTime: "8 min read",
      category: "Research",
      likes: 42,
      comments: 18,
      views: 1250,
      tags: ["Autonomous Vehicles", "AI", "Safety"],
    },
    {
      id: 2,
      title: "Smart Traffic Management: Reducing Urban Congestion with AI",
      excerpt:
        "How artificial intelligence and machine learning algorithms are being used to optimize traffic flow and reduce congestion in major cities worldwide.",
      image:
        "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      author: "Prof. Michael Chen",
      date: "2025-10-25",
      readTime: "6 min read",
      category: "Technology",
      likes: 38,
      comments: 12,
      views: 980,
      tags: ["Smart Cities", "Traffic Management", "Machine Learning"],
    },
    {
      id: 3,
      title:
        "Electric Vehicle Infrastructure: Building the Network of Tomorrow",
      excerpt:
        "An in-depth look at the challenges and solutions for creating a comprehensive electric vehicle charging infrastructure to support the transition to sustainable transportation.",
      image:
        "https://images.unsplash.com/photo-1593941707882-a5bac6861d75?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      author: "Sarah Johnson",
      date: "2025-10-22",
      readTime: "10 min read",
      category: "Sustainability",
      likes: 56,
      comments: 24,
      views: 1580,
      tags: ["Electric Vehicles", "Infrastructure", "Sustainability"],
    },
    {
      id: 4,
      title: "Connected Vehicles: The IoT Revolution in Transportation",
      excerpt:
        "Discover how Internet of Things (IoT) technology is transforming vehicles into smart, connected devices that communicate with infrastructure and other vehicles.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      author: "Alex Thompson",
      date: "2025-10-20",
      readTime: "7 min read",
      category: "Innovation",
      likes: 33,
      comments: 15,
      views: 920,
      tags: ["IoT", "Connected Vehicles", "V2X Communication"],
    },
  ];

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

  const getCategoryColor = (category: string) => {
    const colors = {
      Research: "#10b981",
      Technology: "#3b82f6",
      Sustainability: "#8b5cf6",
      Innovation: "#f59e0b",
    };
    return colors[category as keyof typeof colors] || "#6b7280";
  };

  return (
    <section className="blog-news">
      <div className="blog-news-container">
        {/* Section Header */}
        <div className="blog-news-header">
          <div className="section-badge">
            <MessageCircle className="badge-icon" />
            Latest Insights
          </div>
          <h2 className="section-title">
            Recent Posts &<span className="title-accent"> Industry News</span>
          </h2>
          <p className="section-description">
            Stay updated with the latest research findings, industry trends, and
            expert insights in intelligent transportation systems.
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
                  {post.category}
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
