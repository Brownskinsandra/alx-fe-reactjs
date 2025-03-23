import { useAuth } from "../auth/useAuth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate("/profile"); // Redirect after login
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
};

export default Login;
