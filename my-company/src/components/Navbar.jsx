function Navbar() {
  return (
    <nav style={{ backgroundColor: "blue", display: "flex", justifyContent: "space-between", padding: "10px" }}>
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/services">Services</a>
      <a href="/contact">Contact</a>
    </nav>
  );
}

export default Navbar;
