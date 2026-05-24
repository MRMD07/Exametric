import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
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
import Oracle from "./components/Oracle.tsx";
import NotFound from "./pages/notFound.tsx";
import { supabaseClient } from "./components/supabase";
import { type Resource } from "./components/ResourceCard";


function AppContent(){
  const location = useLocation();
  const hideOracle = location.pathname === "/ai-tutor";
  const [resource, setResource] = useState<Resource[]>([]);

  useEffect(() => {
    fetch(
      "https://olympiad-oracle-backend-pwg031w7l-mrmd07s-projects.vercel.app"
    ).catch(() => {});

    async function fetchResources() {
        try {
            const { data, error } = await supabaseClient.from("resources").select("*").order("created_at", { ascending: false });

            if (error) {
                console.error("Error fetching resources:", error);
                return;
            }

            if (data) {
                setResource(data as Resource[]);
            }

        } catch (error) {
            console.error("Unexpected error:", error);
        }
    }

    fetchResources();
  }, []);

  return(
    <>
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
        <Route path="/community-resources" element={<Community resource={resource} />} />
        <Route path="/ai-tutor" element={<Aitutor/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {!hideOracle && <Oracle />}
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;