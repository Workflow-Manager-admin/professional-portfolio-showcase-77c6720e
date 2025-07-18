import React from 'react';

// PUBLIC_INTERFACE
const Blog = () => {
  /**
   * Blog section component displaying featured blog posts
   */
  const blogPosts = [
    {
      id: 1,
      title: 'Building Scalable React Applications',
      excerpt: 'Learn how to structure and architect React applications for long-term maintainability and performance.',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'React',
      image: '⚛️'
    },
    {
      id: 2,
      title: 'CSS Grid vs Flexbox: When to Use Which',
      excerpt: 'A comprehensive guide to understanding the differences between CSS Grid and Flexbox and when to use each.',
      date: '2024-01-08',
      readTime: '6 min read',
      category: 'CSS',
      image: '🎨'
    },
    {
      id: 3,
      title: 'The Future of Web Development',
      excerpt: 'Exploring emerging trends and technologies that will shape the future of web development.',
      date: '2024-01-01',
      readTime: '10 min read',
      category: 'Web Dev',
      image: '🚀'
    }
  ];

  return (
    <section className="blog">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Latest Blog Posts</h2>
          <p className="section-subtitle">Thoughts and insights on web development</p>
        </div>
        
        <div className="blog-grid">
          {blogPosts.map(post => (
            <article key={post.id} className="blog-card">
              <div className="blog-image">
                <span className="blog-icon">{post.image}</span>
              </div>
              
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-category">{post.category}</span>
                  <span className="blog-date">{post.date}</span>
                </div>
                
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                
                <div className="blog-footer">
                  <span className="read-time">{post.readTime}</span>
                  <a href="#" className="read-more">Read More →</a>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        <div className="blog-cta">
          <button className="btn btn-outline">View All Posts</button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
