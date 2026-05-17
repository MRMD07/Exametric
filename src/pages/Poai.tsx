import { Box } from "@mui/material";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import SubjectPageLayout from "../components/SubjectPageLayout";
import { expertGuide } from "../guides/poai";

export default function Poai(){
    return(
        <>
            <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                bgcolor: "background.default",
                color: "text.primary",
            }}
            >
                    {/* Navbar */}
                <Navbar/>

                    {/* Main Content */}
                <Box>
                    <SubjectPageLayout 
                        title="Pakistan Olympiad in Artificial Intelligence (POAI)"
                        guide= { expertGuide }
                    resources={[
                        { label: "Resources", content: "https://youtube.com/playlist?list=PLydJzAOIorUcc7paqgZ5iwxNXqAU7TYwW&si=-GAapy_ePTkEPyoe" },
                        { label: "Practice Papers", content: "https://drive.google.com/drive/folders/1qtT0qaTSZ-s76j3XF0n4b5Q61ixpM_Hy"}
                    ]}
                    />
                </Box>

                    {/* Footer */}
                <Footer/>
            </Box>
        </>
    )
}