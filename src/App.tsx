import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Nmtc from "./pages/Nmtc.tsx";
import Nptc from "./pages/Nptc.tsx";
import Nctc from "./pages/Nctc.tsx";
import Nbtc from "./pages/Nbtc.tsx";
import Poi from "./pages/Poi.tsx";
import Poai from "./pages/Poai.tsx";
import Community from "./pages/Community.tsx";
import Aitutor from "./pages/Aitutor.tsx";
import { ScrollToTop } from "./components/scroll.tsx";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/nmtc" element={<Nmtc />} />
        <Route path="/nptc" element={<Nptc />} />
        <Route path="/nctc" element={<Nctc />} />
        <Route path="/nbtc" element={<Nbtc />} />
        <Route path="/poi" element={<Poi />} />
        <Route path="/poai" element={<Poai />} />
        <Route path="/community-resources" element={<Community />} />
        <Route path="/ai-tutor" element={<Aitutor/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;