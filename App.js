import React from 'react';
import styled from 'styled-components';
import './App.css'; // Optional: Move other styles to an external file

// Styled Components
const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background-color: #004D40;
  color: white;
`;

const CtaButton = styled.button`
  padding: 15px 30px;
  background-color: #FF5722;
  border: none;
  border-radius: 30px;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const App = () => {
  return (
    <div style={styles.container}>
      {/* Use styled Navbar instead of inline styles */}
      <Navbar>
        <div style={styles.logo}>AgriConnect</div>
        <ul style={styles.navLinks}>
          <li>Home</li>
          <li>Features</li>
          <li>Contact</li>
        </ul>
        <button style={styles.navButton}>Sign In</button>
      </Navbar>

      {/* Hero Section */}
      <header style={styles.heroSection}>
        <h1 style={styles.heroTitle}>Welcome to AgriConnect</h1>
        <p style={styles.heroSubtitle}>
          Connecting farmers with NASA's satellite and geospatial datasets.
        </p>
        {/* Replace the original inline button with the styled CtaButton */}
        <CtaButton>Get Started</CtaButton>
      </header>

      {/* Core Features Section */}
      <section style={styles.featuresSection}>
        <h2 style={styles.sectionTitle}>Core Features</h2>
        <div style={styles.featuresGrid}>
          {[
            'Data Detective',
            'Crop Challenges',
            'Farming Fusion',
            'Data Dashboard',
            'Ask the Agricultural Experts',
          ].map((feature, index) => (
            <div key={index} style={styles.featureCard}>
              <h3 style={styles.featureTitle}>{feature}</h3>
              <p style={styles.featureDescription}>
                Discover more about {feature} and how it can help improve farming decisions.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>© 2024 AgriConnect. All rights reserved.</p>
        <ul style={styles.footerLinks}>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
        </ul>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    padding: 0,
    margin: 0,
    lineHeight: 1.6,
  },
  logo: {
    fontSize: '1.5em',
    fontWeight: 'bold',
  },
  navLinks: {
    display: 'flex',
    listStyle: 'none',
    gap: '20px',
  },
  navButton: {
    padding: '10px 20px',
    backgroundColor: '#009688',
    border: 'none',
    borderRadius: '5px',
    color: '#fff',
    cursor: 'pointer',
  },
  heroSection: {
    backgroundImage: 'url(https://source.unsplash.com/1600x900/?farm,fields)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '80vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    textAlign: 'center',
    padding: '20px',
  },
  heroTitle: {
    fontSize: '3rem',
    marginBottom: '20px',
  },
  heroSubtitle: {
    fontSize: '1.5rem',
    marginBottom: '30px',
  },
  featuresSection: {
    padding: '50px 40px',
    backgroundColor: '#f4f4f4',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: '2.5rem',
    marginBottom: '40px',
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '30px',
  },
  featureCard: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  featureTitle: {
    fontSize: '1.5rem',
    marginBottom: '15px',
  },
  featureDescription: {
    fontSize: '1rem',
    color: '#666',
  },
  footer: {
    backgroundColor: '#004D40',
    color: '#fff',
    padding: '20px 40px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerLinks: {
    display: 'flex',
    listStyle: 'none',
    gap: '20px',
  },
};

export default App;
