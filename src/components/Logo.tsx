import { Box } from "@mui/material";

export default function Logo() {
  return (
    <Box
      component="svg"
      viewBox="0 0 120 120"
      sx={{
        width: 36,
        height: 36,
        color: "primary.main",
      }}
    >
      <g transform="translate(60, 60)">
        <polygon points="0,-30 26,-15 26,15 0,30 -26,15 -26,-15"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
        />

        <circle cx="0" cy="-30" r="5" fill="currentColor"/>
        <circle cx="26" cy="-15" r="5" fill="currentColor"/>
        <circle cx="26" cy="15" r="5" fill="currentColor"/>
        <circle cx="0" cy="30" r="5" fill="currentColor"/>
        <circle cx="-26" cy="15" r="5" fill="currentColor"/>
        <circle cx="-26" cy="-15" r="5" fill="currentColor"/>

        <line x1="0" y1="-30" x2="0" y2="30" stroke="currentColor" strokeWidth="2" opacity="0.4"/>
        <line x1="-26" y1="-15" x2="26" y2="15" stroke="currentColor" strokeWidth="2" opacity="0.4"/>
        <line x1="-26" y1="15" x2="26" y2="-15" stroke="currentColor" strokeWidth="2" opacity="0.4"/>

        <circle cx="0" cy="0" r="7" fill="currentColor"/>
      </g>
    </Box>
  );
}