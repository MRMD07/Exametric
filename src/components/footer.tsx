import { Box, Container, Typography, Link, Stack } from "@mui/material";

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
        <Stack
          sx={{
            direction: { xs: "column", sm: "row" },
            spacing: 1,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="body1">
            © {new Date().getFullYear()} OlympiadHub-PK
          </Typography>

          <Stack direction="row" spacing={2}>
            <Link
              href="/privacy"
              underline="hover"
              color="inherit"
            >
              Privacy
            </Link>

            <Link
              href="/terms"
              underline="hover"
              color="inherit"
            >
              Terms
            </Link>

            <Link
              href="/contact"
              underline="hover"
              color="inherit"
            >
              Contact
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}