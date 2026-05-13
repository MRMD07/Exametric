import { Box } from "@mui/material";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import SubjectPageLayout from "../components/SubjectPageLayout";
import { expertGuide } from "../guides/nbtc";

export default function Nbtc(){
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
                        title="National Biology Talent Contest (NBTC)"
                        guide= { expertGuide }
                    resources={[
                        { label: "Past Papers", content: "/nmtc/past-papers" },
                        { label: "Syllabus", content: "syllabus/placeholder" },
                    ]}
                    />
                </Box>

                    {/* Footer */}
                <Footer/>
            </Box>
        </>
    )
}