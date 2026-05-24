import { useEffect } from "react";

import { useLocation }
from "react-router-dom";

import {
  trackPage,
} from "./analytics.ts";

export default function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    trackPage(
      location.pathname
    );
  }, [location]);

  return null;
}