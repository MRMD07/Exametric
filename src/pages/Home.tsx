import {
  Typography,
  Button,
  Divider,
  Link,
  List,
  ListItem,
  Box,
  Stack
} from "@mui/material";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import PrepareSection from "../components/resourcesSection";

export default function Home() {

    const handleScroll = () => {
        const section = document.getElementById("resources");
        if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
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
                <Navbar />

                    {/* Main Content */}
                <Box>
                    <Box
                    sx={{
                        px: { xs: 3, md: 8 },
                        py: { xs: 6, md: 10 },
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 6,
                    }}
                    >
                        {/* LEFT SIDE */}
                        <Box sx={{ maxWidth: 600, ml: { xs: 0, md: 25 }, }}>
                            <Typography
                            sx={{
                                typography: { xs: "h2", md: "h1" },
                                mb: 3,
                                lineHeight: 1.1,
                            }}
                            >
                            EXAMETRIC
                            </Typography>

                            <Typography sx={{ mb: 4, typography: { xs: "h6", md: "h5" } }}>
                            NSTC Preparation. <br />
                            AI Assisted Learning. <br />
                            NSTC Syllabuses. <br />
                            Free Resources. <br />
                            Practice Tests. <br />
                            Guides From Alumnis.
                            </Typography>

                            {/* BUTTONS */}
                            <Stack direction="column" spacing={2} sx={{ width: "fit-content" }}>
                            <Button
                                variant="contained"
                                onClick={handleScroll}
                                sx={{
                                borderRadius: "230px",
                                px: 3,
                                "&:hover": {
                                    transform: "translateY(-1px)",
                                    }
                                }}
                            >
                                Start Preparing
                            </Button>

                            <Button
                                variant="outlined"
                                component="a"
                                href="https://stem.edu.pk/nstc/"
                                target="_blank"
                                sx={{
                                borderRadius: "20px",
                                borderColor: "primary.main",
                                px: 3,
                                }}
                            >
                                Register
                            </Button>

                            <Button
                                variant="outlined"
                                component="a"
                                href="https://docs.google.com/forms/d/e/1FAIpQLSf7e9Kjy1gQ3qsF4NcF7cgTE2V4YX5d94EEidDuIKmbynzPTA/viewform"
                                target="_blank"
                                sx={{
                                borderRadius: "20px",
                                borderColor: "primary.main",
                                px: 3,
                                }}
                            >
                                Join WhatsApp Community
                            </Button>
                            </Stack>
                        </Box>
                        {/* RIGHT SIDE */}
                        <Box
                            sx={{
                                minWidth: { md: 200 },
                                width: { xs: "100%", md: 550 },
                                bgcolor: "background.paper",
                                color: "text.primary",
                                p: {xs: 3, md: 5},
                                borderRadius: 4,
                                boxShadow: 3,
                                border: "1px solid",
                                borderColor: "divider",
                                mr: { xs: 0, md: 20 },
                                maxHeight: { md: 600 }, 
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-start',
                                overflowY: 'auto',
                            }}
                        >
                            {/* Title */}
                            <Typography variant="h4" sx={{ mb: 1 }}>
                                NSTC Selection Process
                            </Typography>

                            <Divider sx={{ mb: 2 }} />

                            {/* Content */}
                            <Typography variant="body2" sx={{ mb: 2 }}>
                                The National Science Talent Contest (NSTC) is conducted annually to
                                identify and nurture talented students across Pakistan in subjects including
                                Physics, Chemistry, Biology, and Mathematics.
                            </Typography>

                            <Typography variant="body2" sx={{ mb: 2 }}>
                                Students initially register through the  
                                official <Link href="https://stem.edu.pk/nstc/" target="_blank" underline="hover" sx={{ fontWeight: 'bold' }}>NSTC portal</Link> and 
                                take a nation wide screen test that evaluates conceptual understanding
                                and problem-solving skills.
                            </Typography>

                            <Typography variant="body2" sx={{ mb: 2 }}>
                                Shortlisted candidates are invited to training camps, where they undergo
                                rigorous academic preparation and further assessments.
                            </Typography>

                            <Typography variant="body2">
                                Final selections are made based on overall performance, and selected
                                students represent Pakistan in international Olympiads.
                            </Typography>

                            <Typography 
                                variant="h5" 
                                component="h3" 
                                gutterBottom 
                                sx={{ mt: 3, fontWeight: 'medium' }}
                            >
                                Eligibility Criteria
                            </Typography>

                            {/* List Section */}
                            <List sx={{ pl: 0 }}>
                                {[
                                { label: "1)", text: "Students of Matric OR F.Sc (Part-I), who scored an aggregate of 60% or more mark in Physics, Chemistry, Biology and Mathematics in last exam." },
                                { label: "2)", text: "Students of O-Levels or A-Level (Part-I), who scored an aggregate of 60% or more mark in Physics, Chemistry, Biology and Mathematics in last exam." },
                                { label: "3)", text: "Students who are currently studying in FSC(Part-II)/A- Level (Part-II) & university students are not eligible to apply." },
                                { label: "4)", text: "Age less than 20 years on 30-06-2027." }
                                ].map((item) => (
                                <ListItem key={item.label} sx={{ alignItems: 'flex-start', px: 0, py: 0.5, mb: 0, }}>
                                    <Typography variant="body1" sx={{ mr: 1, fontWeight: 'bold', minWidth: '25px' }}>
                                    {item.label}
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: 'text.primary' }}>
                                    {item.text}
                                    </Typography>
                                </ListItem>
                                ))}
                            </List>
                        </Box>
                    </Box>
                    {/* Target section for scroll */}
                    <Box
                        id="resources"
                        sx={{
                        height: "100vh",
                        px: 4,
                        py: 6,
                        }}
                    >
                        <PrepareSection />
                    </Box>

                </Box>

                    {/* Footer */}
                <Footer />
            </Box>
        </>

    )
}