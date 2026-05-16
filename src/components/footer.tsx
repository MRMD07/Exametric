import { Box, Container, Typography, Link } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={(theme) => ({
        mt: "auto",
        py: 4,
        backgroundColor: "background.default",
        color: "text.primary",
        borderTop: `1px solid ${theme.palette.text.primary}20`,
        width: "100%",
      })}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: { xs: 3, md: 4 },
          }}
        >
          {/* LEFT SIDE */}
          <Typography
            variant="body1"
            color="inherit"
            sx={{
              flex: 1,
              textAlign: { xs: "center", md: "left" },
              whiteSpace: "nowrap",
            }}
          >
            © {new Date().getFullYear()} Exametric
          </Typography>

          {/* CENTER SECTION */}
          <Typography
            variant="body2"
            sx={{
              flex: 2, 
              textAlign: "center",
              opacity: 0.8,
              px: { xs: 0, md: 4 },
            }}
          >
            This site is an independent initiative. All materials are sourced from public domains and are intended for educational purposes only. We do not claim ownership of any content and respect all copyrights.
          </Typography>

          {/* RIGHT SIDE */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: { xs: "center", md: "flex-end" },
              whiteSpace: "nowrap",
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
