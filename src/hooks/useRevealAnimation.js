import { useEffect } from 'react';

const useRevealAnimation = () => {
  useEffect(() => {
    const revealElems = document.querySelectorAll('.reveal');
    const progBars = document.querySelectorAll('.progress-bar');

    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');

          // Animate Progress Bars
          progBars.forEach(pb => {
            const p = pb.getAttribute('data-progress');
            // only animate if not already animated AND if it's visible
            if (!pb.dataset.animated && entry.target.contains(pb)) { 
              pb.style.width = (p) + '%';
              pb.dataset.animated = "true";
            }
          });
        }
      });
    }, { threshold: 0.15 });

    revealElems.forEach(r => io.observe(r));

    return () => {
      revealElems.forEach(r => io.unobserve(r));
      io.disconnect();
    };
  }, []);
};

export default useRevealAnimation;