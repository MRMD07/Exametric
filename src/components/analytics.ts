import ReactGA from "react-ga4";

const MEASUREMENT_ID =
  "G-YJZRGZWDM6";

export function initGA() {
  ReactGA.initialize(MEASUREMENT_ID);
}

export function trackPage(path: string) {
  ReactGA.send({
    hitType: "pageview",
    page: path,
  });
}