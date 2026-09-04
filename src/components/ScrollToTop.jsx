import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If navigating to a section such as /#about
    if (hash) {
      // Wait for React to finish rendering the Home page
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const element = document.getElementById(
            hash.substring(1)
          );

          if (element) {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        });
      });

      return;
    }

    // Normal page navigation
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname, hash]);

  return null;
}

export default ScrollToTop;