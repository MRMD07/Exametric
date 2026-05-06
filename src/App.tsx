import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Nmtc from "./pages/Nmtc.tsx";
import Nptc from "./pages/Nptc.tsx";
import Nctc from "./pages/Nctc.tsx";
import Nbtc from "./pages/Nbtc.tsx";
import Community from "./pages/Community.tsx";
import Aitutor from "./pages/Aitutor.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/nmtc" element={<Nmtc />} />
        <Route path="/nptc" element={<Nptc />} />
        <Route path="/nctc" element={<Nctc />} />
        <Route path="/nbtc" element={<Nbtc />} />
        <Route path="/community-resources" element={<Community />} />
        <Route path="/ai-tutor" element={<Aitutor/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;