import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function BlogListPage() {
  return (
    <div>
      <h1>Blog List</h1>
      <ul>
        <li><Link to="1">Blog Post 1</Link></li>
        <li><Link to="2">Blog Post 2</Link></li>
        <li><Link to="3">Blog Post 3</Link></li>
      </ul>
      <Outlet /> {/* This is where BlogDetailPage will be rendered */}
    </div>
  );
}

export default BlogListPage;