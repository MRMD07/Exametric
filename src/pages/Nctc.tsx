import { Box } from "@mui/material";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import SubjectPageLayout from "../components/SubjectPageLayout";
import { expertGuide } from "../guides/nbtc";

export default function Nctc(){
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
                        title="National Chemistry Talent Contest (NCTC)"
                        guide= { expertGuide }
                    resources={[
                        { label: "Past Papers", content: "https://drive.google.com/drive/folders/1IYY-Q0yAL9OS89fh_CA0VhgMZuhHVpWV?usp=drive_link" },
                        { label: "Syllabus", content: "https://drive.google.com/file/d/14f91euSH5gd5k7c8ciW88R5-zB7Uq3YQ/view" },
                    ]}                    
                    />
                </Box>

                    {/* Footer */}
                <Footer/>
            </Box>
        </>
    )
}