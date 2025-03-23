const useAuth = () => {
  const user = localStorage.getItem("user"); // Simulated authentication check
  return { isAuthenticated: !!user }; // Convert to boolean
};

export default useAuth;
