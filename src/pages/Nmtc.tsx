import { Box } from "@mui/material";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import SubjectPageLayout from "../components/SubjectPageLayout";
import { expertGuide } from "../guides/nmtc";

export default function Nmtc(){
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
                        title="National Mathematics Talent Contest (NMTC)"
                        guide= { expertGuide }
                    resources={[
                        { label: "Past Papers", content: "/nmtc/past-papers" },
                        { label: "Syllabus", content: "/nmtc/syllabus" },
                        { label: "Registration", content: "/nmtc/registration" },
                    ]}
                    />
                </Box>

                    {/* Footer */}
                <Footer/>
            </Box>
        </>
    )
}