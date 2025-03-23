import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams(); // Get the blog post ID from the URL

  return (
    <div>
      <h2>Blog Post {id}</h2>
      <p>This is the content of blog post {id}.</p>
    </div>
  );
};

export default BlogPost;
