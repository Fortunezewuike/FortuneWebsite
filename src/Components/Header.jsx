import React from "react";

function Header() {
  return (
    <header style={{
      backgroundColor: "#4CAF50",
      color: "white",
      padding: "20px",
      textAlign: "center"
    }}>

      {/* Navigation Bar */}
      <nav style={{
        marginTop: "10px"
      }}>
        <a href="#home" style={navLinkStyle}>Home</a>
        <a href="#about" style={navLinkStyle}>About</a>
        <a href="#contact" style={navLinkStyle}>Contact</a>
        <a href="https://github.com/" style={navLinkStyle}target="_blank" rel="noopener noreferrer">Git-Hub-Profile</a>
      </nav>
    </header>
  );
}

// Style object for nav links
const navLinkStyle = {
  margin: "0 10px",
  color: "white",
  textDecoration: "none",
  fontWeight: "bold"
};

export default Header;