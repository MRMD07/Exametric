import { Box } from "@mui/material";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import SubjectPageLayout from "../components/SubjectPageLayout";
import { expertGuide } from "../guides/poi";

export default function Poi(){
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
                        title="Pakistan Olympiad in Informatics (POI)"
                        guide= { expertGuide }
                    resources={[
                        { label: "Book", content: "https://drive.google.com/file/d/1Y2sYZ00bYpF1P4nbq8mZYUHExMBBQRA2/view?usp=drive_link" },
                    ]}
                    />
                </Box>

                    {/* Footer */}
                <Footer/>
            </Box>
        </>
    )
}