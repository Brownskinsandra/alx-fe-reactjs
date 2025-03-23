import { useQuery } from '@tanstack/react-query';

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  return response.json();
};

const PostsComponent = () => {
  // Fetch posts using React Query
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ['posts'], // Unique key for caching
    queryFn: fetchPosts, // Function to fetch data
    staleTime: 5000, // Data stays fresh for 5 seconds
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (error) return <p>Error fetching posts: {error.message}</p>;

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={() => refetch()}>Refresh Posts</button>
      <ul>
        {data.map(post => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
