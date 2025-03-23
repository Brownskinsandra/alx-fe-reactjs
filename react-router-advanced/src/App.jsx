import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // Ensure Home exists
import BlogPost from "./pages/BlogPost"; // Import BlogPost
import Profile from "./pages/Profile"; // Import Profile if it exists

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/*" element={<Profile />} />
        <Route path="/blog/:id" element={<BlogPost />} /> {/* Dynamic Route */}
      </Routes>
    </Router>
  );
}

export default App;
