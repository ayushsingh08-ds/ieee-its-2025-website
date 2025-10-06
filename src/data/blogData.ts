// Blog post categories for consistent categorization
export const BLOG_CATEGORIES = {
  RESEARCH: 'Research',
  APPLICATIONS: 'Applications', 
  QUANTUM: 'Quantum',
  NETWORKS: 'Networks',
  THEORY: 'Theory',
  TUTORIAL: 'Tutorial'
} as const;

// Blog post interface for type safety
export interface BlogPostData {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string; // Format: "YYYY-MM-DD"
  readTime: string;
  category: keyof typeof BLOG_CATEGORIES;
  likes: number;
  comments: number;
  views: number;
  tags: string[];
  // Optional fields for future expansion
  fullContent?: string;
  authorBio?: string;
  isFeatured?: boolean;
  externalUrl?: string;
}

// ===== BLOG POSTS DATA =====
// TO ADD NEW POST: Copy an existing post object, change the id, and update the details
// TO EDIT POST: Find the post by title and modify the fields
// TO REMOVE POST: Delete the entire post object

export const BLOG_POSTS_DATA: BlogPostData[] = [
  {
    id: 1,
    title: "Finite-Blocklength Analysis in Modern Communication Systems",
    excerpt: "Exploring recent advances in finite-blocklength information theory and their applications to 5G/6G wireless communications, including practical implications for ultra-reliable low-latency communications.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    author: "Prof. Alon Orlitsky",
    date: "2025-10-28",
    readTime: "12 min read",
    category: "RESEARCH",
    likes: 68,
    comments: 24,
    views: 1850,
    tags: ["Shannon Theory", "Communication", "Coding Theory"],
    isFeatured: true,
  },
  
  {
    id: 2,
    title: "Information Theory Meets Machine Learning: Mutual Information Estimation",
    excerpt: "How information-theoretic principles are revolutionizing machine learning through better understanding of generalization, representation learning, and feature selection using mutual information estimators.",
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    author: "Dr. Emina Soljanin",
    date: "2025-10-25", 
    readTime: "9 min read",
    category: "APPLICATIONS",
    likes: 45,
    comments: 18,
    views: 1240,
    tags: ["Machine Learning", "Mutual Information", "Data Science"],
  },
  
  {
    id: 3,
    title: "Quantum Error Correction: From Theory to Practical Implementation",
    excerpt: "An comprehensive overview of quantum error-correcting codes, their mathematical foundations, and recent breakthroughs in making quantum computing more reliable through advanced coding techniques.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    author: "Prof. Martin Bossert",
    date: "2025-10-22",
    readTime: "14 min read", 
    category: "QUANTUM",
    likes: 73,
    comments: 31,
    views: 2100,
    tags: ["Quantum Computing", "Error Correction", "Cryptography"],
    isFeatured: true,
  },
  
  {
    id: 4,
    title: "Network Coding Theory: Optimizing Information Flow in Networks",
    excerpt: "Discover how network coding transforms traditional routing approaches by allowing intermediate nodes to combine and process information, leading to significant improvements in throughput and reliability.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    author: "Dr. Sarah Kim",
    date: "2025-10-20",
    readTime: "10 min read",
    category: "NETWORKS", 
    likes: 52,
    comments: 20,
    views: 1420,
    tags: ["Network Coding", "Multi-User Systems", "Information Flow"],
  },

  // ===== ADD NEW BLOG POSTS HERE =====
  // Copy the template below and modify:
  /*
  {
    id: 5, // INCREMENT THIS NUMBER
    title: "Your Blog Post Title",
    excerpt: "Brief description of your blog post content...",
    image: "https://images.unsplash.com/photo-YOUR-IMAGE-ID",
    author: "Author Name",
    date: "2025-MM-DD", // Use YYYY-MM-DD format
    readTime: "X min read",
    category: "RESEARCH", // Use one from BLOG_CATEGORIES above
    likes: 0,
    comments: 0, 
    views: 0,
    tags: ["Tag1", "Tag2", "Tag3"],
    // Optional fields:
    isFeatured: false,
    authorBio: "Author bio...",
    externalUrl: "https://external-link.com"
  },
  */
];

// Helper functions for blog management
export const getBlogPostsByCategory = (category: keyof typeof BLOG_CATEGORIES) => {
  return BLOG_POSTS_DATA.filter(post => post.category === category);
};

export const getFeaturedBlogPosts = () => {
  return BLOG_POSTS_DATA.filter(post => post.isFeatured);
};

export const getRecentBlogPosts = (count: number = 4) => {
  return BLOG_POSTS_DATA
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
};

export const getBlogPostsByAuthor = (authorName: string) => {
  return BLOG_POSTS_DATA.filter(post => 
    post.author.toLowerCase().includes(authorName.toLowerCase())
  );
};

export const getBlogPostsByTag = (tag: string) => {
  return BLOG_POSTS_DATA.filter(post => 
    post.tags.some(postTag => postTag.toLowerCase().includes(tag.toLowerCase()))
  );
};