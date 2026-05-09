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
            © {new Date().getFullYear()} OlympiadHub-PK
          </Typography>

          {/* CENTER SECION */}
          <Typography
            variant="body1"
            sx={{
              flex: 2,
              textAlign: "center",
              opacity: 0.9,
            }}
          >
            This site is created for the sole purpose of education. We don't own any of these publicly available resources.
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