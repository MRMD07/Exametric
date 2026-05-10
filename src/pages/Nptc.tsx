import { Box } from "@mui/material";
import Navbar from "../components/navbar";
import Footer from "../components/footer"

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
                </Box>

                    {/* Footer */}
                <Footer/>
            </Box>
        </>
    )
}