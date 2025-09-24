/**
 * Unified navigation utility for section scrolling and URL management
 * Handles both top navigation and quick links consistently
 */

export const navigateToSection = (id: string) => {
  const isHomePage = window.location.pathname === '/';

  if (isHomePage) {
    // If already on homepage, scroll to section and update URL
    const waitForElementAndScroll = () => {
      const element = document.getElementById(id);

      if (element) {
        // Use getBoundingClientRect for more accurate positioning
        const rect = element.getBoundingClientRect();
        const navHeight = 80;
        const scrollPosition = window.scrollY + rect.top - navHeight;

        // Scroll to section with smooth behavior
        window.scrollTo({
          top: scrollPosition,
          behavior: 'smooth'
        });

        // Update URL hash for proper browser navigation
        window.history.pushState(null, '', `#${id}`);
        return true;
      }

      // Element doesn't exist yet, wait a bit and try again
      setTimeout(waitForElementAndScroll, 50);
      return false;
    };

    waitForElementAndScroll();
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

    // Wait for element to exist before scrolling
    const waitForElementAndScroll = () => {
      const element = document.getElementById(hash);

      if (element) {
        // Use getBoundingClientRect for more accurate positioning
        const rect = element.getBoundingClientRect();
        const navHeight = 80;
        const scrollPosition = window.scrollY + rect.top - navHeight;

        window.scrollTo({
          top: scrollPosition,
          behavior: 'smooth'
        });
        return true;
      }

      // Keep trying until element is found
      setTimeout(waitForElementAndScroll, 50);
      return false;
    };

    waitForElementAndScroll();
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

      // Wait for element to exist before scrolling
      const waitForElementAndScroll = () => {
        const element = document.getElementById(hash);

        if (element) {
          // Use getBoundingClientRect for more accurate positioning
          const rect = element.getBoundingClientRect();
          const navHeight = 80;
          const scrollPosition = window.scrollY + rect.top - navHeight;

          window.scrollTo({
            top: scrollPosition,
            behavior: 'smooth'
          });
          return true;
        }

        // Keep trying until element is found
        setTimeout(waitForElementAndScroll, 50);
        return false;
      };

      waitForElementAndScroll();
    }
  };

  return { handleHashChange };
};
