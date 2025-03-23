function Footer() {
  return (
    <footer style={{ padding: '10px', background: '#222', color: 'white', textAlign: 'center', marginTop: '20px' }}>
      <p>&copy; {new Date().getFullYear()} My Company. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
