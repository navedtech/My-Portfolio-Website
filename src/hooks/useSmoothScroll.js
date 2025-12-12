import { useEffect } from 'react';
// Note: We need a way to access Bootstrap's Collapse class. 
// We can use the global Bootstrap variable loaded in index.html.

const useSmoothScroll = () => {
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const href = e.currentTarget.getAttribute('href');
      if (href && href.length > 1 && href.startsWith('#')) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });

          // Collapse Bootstrap nav on mobile
          const bsCollapse = document.querySelector('.navbar-collapse.show');
          // Check if Bootstrap JS object is available globally
          if (bsCollapse && window.bootstrap && window.bootstrap.Collapse) {
            new window.bootstrap.Collapse(bsCollapse).toggle();
          }
        }
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(a => {
      a.addEventListener('click', handleAnchorClick);
    });

    // Cleanup function for useEffect
    return () => {
      links.forEach(a => {
        a.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []);
};

export default useSmoothScroll;