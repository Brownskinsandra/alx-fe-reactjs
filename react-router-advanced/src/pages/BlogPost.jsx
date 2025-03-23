import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams(); // Get the dynamic id from the URL

  return (
    <div>
      <h1>Blog Post</h1>
      <p>Displaying content for blog post ID: {id}</p>
    </div>
  );
};

export default BlogPost;
