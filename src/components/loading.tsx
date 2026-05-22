import { Box } from "@mui/material";

export default function LoadingIndicator() {
  return (
    <Box
        sx={{
            "@keyframes oracleBounce": {
            "0%, 80%, 100%": {
                transform: "scale(0.7)",
                opacity: 0.5,
            },

            "40%": {
                transform: "scale(1)",
                opacity: 1,
            },
            },
        }}
    >
        <Box
        sx={{
            display: "flex",
            gap: 1,
            alignItems: "center",
            px: 1,
            py: 1,
        }}
        >
        {[0, 1, 2].map((dot) => (
            <Box
            key={dot}
            sx={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                bgcolor: "text.primary",
                opacity: 0.7,
                animation: "oracleBounce 1.4s infinite",
                animationDelay: `${dot * 0.2}s`,
            }}
            />
        ))}
        </Box>

    </Box>
  );
}