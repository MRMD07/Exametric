import { Box } from "@mui/material";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import SubjectPageLayout from "../components/SubjectPageLayout";
import { expertGuide } from "../guides/nctc";

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
                        { label: "Past Papers", content: "https://drive.google.com/drive/folders/1lYc4NahcM1RGzDJF6FtqOKiEAR6lpnaA?usp=drive_link" },
                        { label: "Study Material", content: "https://drive.google.com/drive/folders/1sCxZnxY9KuXTyEEzchQ6v0Pl6JKsXumu" },
                    ]}                    
                    />
                </Box>

                    {/* Footer */}
                <Footer/>
            </Box>
        </>
    )
}