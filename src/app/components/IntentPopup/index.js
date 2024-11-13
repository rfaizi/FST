import React from 'react';

const IntentPopup = ({isVisible, onClose}) => { 
  if(!isVisible) return null; 
  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2>Modal Title</h2>
        <p>This is a modal popup!</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};
const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10000,
  },
  modal: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '4px',
    maxWidth: '500px',
    width: '100%',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  },
}

export default IntentPopup;
