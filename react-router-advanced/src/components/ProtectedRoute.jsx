import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/useAuth"; // Ensure this hook exists

const ProtectedRoute = ({ element }) => {
  const { isAuthenticated } = useAuth(); // Check if user is authenticated

  return isAuthenticated ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
