import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // This executes *after* the DOM has switched to the new page content
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" // Prevents any visible scrolling animation
    });
  }, [pathname]);

  return null;
}
