import { useState } from "react";

const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});  // ✅ State to track errors

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};

    if (!username) validationErrors.username = "Username is required";  // ✅ Check if username is empty
    if (!email) validationErrors.email = "Email is required";  // ✅ Check if email is empty
    if (!password) validationErrors.password = "Password is required";  // ✅ Check if password is empty

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);  // ✅ Set errors and prevent submission
      return;
    }

    console.log({ username, email, password });
    setErrors({});  // Clear errors if form is valid
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Username:</label>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}  {/* ✅ Show error message */}

      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}  {/* ✅ Show error message */}

      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}  {/* ✅ Show error message */}

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
