import { Box, Container, Typography, Link } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={(theme) => ({
        mt: "auto",
        py: 2,
        backgroundColor: "background.default",
        color: "text.primary",
        borderTop: `1px solid ${theme.palette.text.primary}20`,
      })}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 6,
          }}
        >
            {/* RIGHT SIDE */}
          <Typography variant="body1" color="inherit" sx={{ justifySelf: {md: "start"} }}>
            © {new Date().getFullYear()} OlympiadHub-PK
          </Typography>

          {/* CENTER SECION */}
          <Typography
            variant="body1"
            sx={{
                textAlign: "center",
                opacity: 0.9,
                px: 2,
            }}
          >
            This site is created for the sole purpose of education. We don't own any of these publicly available resources.
          </Typography>

            {/* LEFT SIDE */}
            <Box
             sx={{ 
                justifySelf: {md: "end"},
                gap: 0.5,
                alignItems: "center",
                display: "flex"
             }}
            >
                <Link
                    href="mailto:draftanddev@gmail.com"
                    underline="hover"
                    color="inherit"
                    target="_blank"
                >
                    Contact us: draftanddev@gmail.com
                </Link>
            </Box>

        </Box>
      </Container>
    </Box>
  );
}