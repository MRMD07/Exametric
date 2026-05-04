import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  Box,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ThemeToggle from "./toggleTheme";

const navItems = [ "HOME", "NMTC", "NPTC", "NCTC", "NBTC", "Community Resources", "AI Tutor" ];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("HOME");
  const navigate = useNavigate();

  return (
    <>
      <AppBar position="static" color="transparent" elevation={4}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          
          {/* Left: Logo */}
          <Typography onClick={() => navigate('/')} variant="h6" sx={{ fontWeight: "bold" , cursor: "pointer", ml: {md: 2}}}>
            Olympiad Hub
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {navItems.map((item) => (
              <Button
                key={item}
                color="inherit"
                onClick={() => {
                  setActive(item);
                  navigate(`/${item.toLowerCase().replace(/\s+/g, '-')}`);
                }}
                sx={{
                  borderRadius: 0, 
                  // Make the entire borderBottom property conditional
                  borderBottom: active === item 
                    ? "5px solid" 
                    : "5px solid transparent", 
                  borderColor: active === item ? "primary.main" : "transparent",
                  "&:hover": {
                    // Ensure hover matches the active thickness to prevent "jumping"
                    borderBottom: "5px solid",
                    borderColor: "primary.main",
                  },
                  fontSize: "1.1rem",
                }}
              >
                {item}
              </Button>
            ))}
          </Box>

          {/* Right: Toggle + Mobile Menu */}
          <Box>
            <ThemeToggle />

            <IconButton
              sx={{ display: { xs: "inline-flex", md: "none" } }}
              onClick={() => setOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 250 }} role="presentation" onClick={() => setOpen(false)}>
          <List>
            {navItems.map((item) => (
              <ListItem key={item}>
                <ListItemText primary={item}
                  color="inherit"
                  onClick={() => {
                    setActive(item);
                    navigate(`/${item.toLowerCase().replace(/\s+/g, '-')}`);
                  }}
                  sx={{
                    borderRadius: 0, 
                    // Make the entire borderBottom property conditional
                    borderBottom: active === item 
                      ? "5px solid" 
                      : "5px solid transparent", 
                    borderColor: active === item ? "primary.main" : "transparent"
                  }}
              />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}