import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute"; // Ensure this file exists
import Profile from "./components/Profile"; // Make sure this is the correct path

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile/*" element={<ProtectedRoute element={<Profile />} />} /> {/* Protected Nested Route */}
      </Routes>
    </Router>
  );
}

export default App;
