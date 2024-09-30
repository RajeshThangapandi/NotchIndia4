import React, { useState, useEffect } from 'react';
import upArrow from '../../images/up.png'; // Import your custom image

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          style={styles.backToTopButton}
        >
          <img
            src={upArrow}
            alt="Back to Top"
            style={styles.icon} // Image styling
          />
        </button>
      )}
    </div>
  );
};

const styles = {
  backToTopButton: {
    position: 'fixed',
    bottom: '40px',
    right: '40px',
    backgroundColor: 'transparent', // Set background to transparent if you don't want a background color
    border: 'none',
    padding: '10px',
    borderRadius: '50%',
    cursor: 'pointer',
    zIndex: '1000', // Ensure it stays on top
  },
  icon: {
    width: '40px', // Adjust size of your image
    height: '40px',
  },
};

export default BackToTop;


