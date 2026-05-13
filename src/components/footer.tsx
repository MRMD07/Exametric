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
            gap: 3,
            width: "100%",
            flexWrap: "nowrap", 
          }}
        >
            {/* RIGHT SIDE */}
          <Typography
            variant="body1"
            color="inherit"
            sx={{
              flex: 1,
              whiteSpace: "nowrap",
            }}
          >
            © {new Date().getFullYear()} Exametric
          </Typography>

          {/* CENTER SECION */}
          <Typography
            variant="body2"
            sx={{
              flex: "1 1 auto",
              textAlign: "center",
              opacity: 0.9,
              px: { xs: 0, md: 3 },
            }}
          >
            This site is as independent initiative. All materials are sourced from public domains and are intended for educational purposes only. We do not claim ownership of any content and respect all copyrights.
          </Typography>

            {/* RIGHT SIDE */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "flex-end",
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