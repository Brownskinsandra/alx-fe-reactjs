import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile"; // Ensure this file exists
import Login from "./pages/Login"; // Add a simple login page
import ProtectedRoute from "./components/ProtectedRoute"; // Import ProtectedRoute

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<ProtectedRoute element={<Profile />} />} /> {/* Protected Route */}
      </Routes>
    </Router>
  );
}

export default App;
