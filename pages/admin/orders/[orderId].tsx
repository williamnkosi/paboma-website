import React from 'react'


import { useRouter } from 'next/router';

function BlogPost() {
  const router = useRouter();
  const { orderId } = router.query;

  return (
    <div>
      <h1>Blog Post: {orderId}</h1>
    </div>
  );
}

export default BlogPost;