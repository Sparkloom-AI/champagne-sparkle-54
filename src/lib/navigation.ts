/**
 * Unified navigation utility for section scrolling and URL management
 * Handles both top navigation and quick links consistently
 */

export const navigateToSection = (id: string) => {
  const isHomePage = window.location.pathname === '/';
  
  if (isHomePage) {
    // If already on homepage, scroll to section and update URL
    const element = document.getElementById(id);
    if (element) {
      // Calculate offset for fixed navigation (assuming nav height ~80px)
      const navHeight = 80;
      const elementPosition = element.offsetTop - navHeight;
      
      // Scroll to section with smooth behavior
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      
      // Update URL hash for proper browser navigation
      window.history.pushState(null, '', `#${id}`);
    }
  } else {
    // If not on homepage, navigate to homepage with anchor
    window.location.href = `/#${id}`;
  }
};

/**
 * Handle initial hash navigation when page loads
 * This ensures direct links like /#process-section work correctly
 */
export const handleInitialHashNavigation = () => {
  const isHomePage = window.location.pathname === '/';
  
  if (isHomePage && window.location.hash) {
    const hash = window.location.hash.substring(1);
    const element = document.getElementById(hash);
    
    if (element) {
      // Small delay to ensure page is rendered
      setTimeout(() => {
        const navHeight = 80;
        const elementPosition = element.offsetTop - navHeight;
        
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }, 100);
    }
  }
};

/**
 * Hook for handling hash changes (browser back/forward navigation)
 * This ensures the URL stays in sync when users use browser navigation
 */
export const useHashNavigation = () => {
  const handleHashChange = () => {
    const isHomePage = window.location.pathname === '/';
    
    if (isHomePage && window.location.hash) {
      const hash = window.location.hash.substring(1);
      const element = document.getElementById(hash);
      
      if (element) {
        const navHeight = 80;
        const elementPosition = element.offsetTop - navHeight;
        
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return { handleHashChange };
};
