function initScrollAnimation() {
    let scrollProgress = 0;
    let scrollY = 0;
    let ticking = false;
    let rafId = null;
  
    const updateScrollValues = () => {
      if (typeof window === 'undefined') return;
      
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      scrollProgress = Math.min((window.scrollY / totalHeight) * 100, 100);
      scrollY = window.scrollY;
  
      // Update DOM elements
      const backgroundElement = document.querySelector('[data-scroll-background]');
      const heroSection = document.querySelector('[data-scroll-hero]');
      const skillsSection = document.querySelector('[data-scroll-skills]');
  
      if (backgroundElement) {
        backgroundElement.style.transform = `translateY(-${scrollProgress / 3}%)`;
        backgroundElement.style.opacity = Math.max(1 - scrollProgress / 100, 0);
      }
  
      if (heroSection) {
        heroSection.style.transform = `translateY(${scrollY * 0.1}px)`;
        heroSection.style.opacity = Math.max(1 - scrollY / 500, 0);
      }
  
      if (skillsSection) {
        const viewportHeight = window.innerHeight;
        const rect = skillsSection.getBoundingClientRect();
        const elementVisible = rect.top <= viewportHeight;
        
        if (elementVisible) {
          const progress = Math.min(
            Math.max((viewportHeight - rect.top) / viewportHeight, 0),
            1
          );
          skillsSection.style.transform = `translateY(${(1 - progress) * 100}px)`;
          skillsSection.style.opacity = progress;
        }
      }
  
      ticking = false;
    };
  
    const onScroll = () => {
      if (!ticking) {
        rafId = window.requestAnimationFrame(() => {
          updateScrollValues();
          ticking = false;
        });
        ticking = true;
      }
    };
  
    // Add scroll event listener with passive flag
    window.addEventListener('scroll', onScroll, { passive: true });
  
    // Initial update
    updateScrollValues();
  
    // Cleanup function
    window.addEventListener('beforeunload', () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
    });
  }
  
  // Auto-initialize
  initScrollAnimation();