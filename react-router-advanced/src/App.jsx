import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BlogPost from "./components/BlogPost"; // Ensure this file exists
import Profile from "./components/Profile"; // Ensure this file exists
import ProtectedRoute from "./components/ProtectedRoute"; // Ensure this file exists

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<BlogPost />} /> {/* Dynamic Blog Route */}
        <Route path="/profile/*" element={<ProtectedRoute element={<Profile />} />} />
      </Routes>
    </Router>
  );
}

export default App;
