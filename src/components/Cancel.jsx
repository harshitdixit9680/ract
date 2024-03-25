// Cancel.js
import React from 'react';

const Cancel = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Payment Canceled</h2>
      <p style={styles.paragraph}>Your payment was canceled. Please try again later.</p>
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
    color: '#8B0000',
  },
  paragraph: {
    fontSize: '18px',
    color: '#333',
  },
};

export default Cancel;
