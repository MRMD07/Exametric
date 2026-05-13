import { Box } from "@mui/material";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import SubjectPageLayout from "../components/SubjectPageLayout";
import { expertGuide } from "../guides/nptc";

export default function Nptc(){
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
                        title="National Physics Talent Contest (NPTC)"
                        guide= { expertGuide }
                    resources={[
                        { label: "Past Papers", content: "https://drive.google.com/drive/folders/1N0YaoK6A2sYk7MclfXOH_qF39i8rEpgJ?usp=drive_link" },
                        { label: "Study Material", content: "https://drive.google.com/drive/u/1/folders/10h6RwSopzdbV2UviovnaimqmlgZ9SJNc" },
                    ]}
                    />
                </Box>

                    {/* Footer */}
                <Footer/>
            </Box>
        </>
    )
}