import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BlogPost from "./pages/BlogPost"; // Import BlogPost component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<BlogPost />} /> {/* Dynamic Route */}
      </Routes>
    </Router>
  );
}

export default App;
