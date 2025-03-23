import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile"; // Ensure the correct path to Profile
import Home from "./pages/Home"; // Example home page component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/*" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
