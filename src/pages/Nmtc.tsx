import { Box } from "@mui/material";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import SubjectPageLayout from "../components/SubjectPageLayout";


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
                <SubjectPageLayout 
                    title="National Mathematics Talent Contest (NMTC)"
                    guide="The National Mathematics Talent Contest (NMTC) is a prestigious mathematics competition held in Pakistan. It serves as a platform for students to showcase their mathematical skills and compete at a national level. The NMTC is organized by the Pakistan Mathematical Society and is open to students from various educational levels, including primary, secondary, and higher secondary schools."
                    resources={[
                        { label: "Past Papers", content: "/nmtc/past-papers" },
                        { label: "Syllabus", content: "/nmtc/syllabus" },
                        { label: "Registration", content: "/nmtc/registration" },
                    ]}
                />

                    {/* Footer */}
                <Footer/>
            </Box>
        </>
    )
}