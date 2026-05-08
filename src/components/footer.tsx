import { Box, Container, Typography, Link } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={(theme) => ({
        mt: "auto",
        py: 2,
        backgroundColor: theme.palette.background.default,
        color: theme.palette.primary.main,
        borderTop: `1px solid ${theme.palette.primary.main}20`,
      })}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr auto 1fr"},
            width: "100%",
            gap: 2,
            alignItems: "center",
          }}
        >
            {/* RIGHT SIDE */}
          <Typography variant="body1" color="inherit" sx={{ justifySelf: {md: "start"} }}>
            © {new Date().getFullYear()} OlympiadHub-PK
          </Typography>

          {/* CENTER SECION */}
          <Typography
            variant="body2"
            sx={{
                textAlign: "center",
                opacity: 0.9,
                px: 2,
            }}
          >
            This site is created for the sole purpose of education. We don't own any of these publicly available resources.
          </Typography>

            {/* LEFT SIDE */}
            <Box sx={{ justifySelf: {md: "end"} }}>
                <Typography variant="body1" color="inherit">
                    Contact us: 
                </Typography>
                <Link
                    href="mailto:draftanddev@gmail.com"
                    underline="hover"
                    color="inherit"
                    target="_blank"
                >
                    draftanddev@gmail.com
                </Link>
            </Box>

        </Box>
      </Container>
    </Box>
  );
}