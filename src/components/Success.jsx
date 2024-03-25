// Success.js
import React from 'react';

const Success = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Payment Successful</h2>
      <p style={styles.paragraph}>Thank you for your payment.</p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
  },
  heading: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#006400',
  },
  paragraph: {
    fontSize: '18px',
    color: '#333',
  },
};

export default Success;
