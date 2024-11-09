

import React from 'react';
import { useParams } from 'react-router-dom';

function BlogDetailPage() {
  const { id } = useParams(); // Access the dynamic id from the URL
  return (
    <div>
      <h2>Blog Post {id}</h2>
      <p>This is the detailed content for Blog Post {id}.</p>
    </div>
  );
}

export default BlogDetailPage;