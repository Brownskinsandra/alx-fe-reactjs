import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Blog</h1>
      <ul>
        <li><Link to="/blog/1">Read Blog Post 1</Link></li>
        <li><Link to="/blog/2">Read Blog Post 2</Link></li>
        <li><Link to="/blog/3">Read Blog Post 3</Link></li>
      </ul>
    </div>
  );
};

export default Home;
