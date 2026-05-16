import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
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
import Logo from "./Logo";

const navItems = [ "HOME", "NMTC", "NPTC", "NCTC", "NBTC", "POI", "POAI", "Community Resources", "AI Tutor" ];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const active = location.pathname === "/" ? "/home" : location.pathname;
  const navigate = useNavigate();

  return (
    <>
      <AppBar position="static" color="transparent" elevation={4}>
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* Left: Logo */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, cursor: "pointer" }} onClick={() => navigate('/')}>
              <Logo />
              <Typography variant="h6" sx={{ fontWeight: "bold" , cursor: "pointer"}}>
                Exametric
              </Typography>
            </Box>
          </Box>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2, justifyContent: "center" }}>
            {navItems.map((item) => (
              <Button
                key={item}
                color="inherit"
                onClick={() => {
                  navigate(`/${item.toLowerCase().replace(/\s+/g, '-')}`);
                }}
                sx={{
                  borderRadius: 0, 
                  // Make the entire borderBottom property conditional
                  borderBottom: active.startsWith(`/${item.toLowerCase().replace(/\s+/g, '-')}`)
                    ? "5px solid" 
                    : "5px solid transparent", 
                  borderColor: active.startsWith(`/${item.toLowerCase().replace(/\s+/g, '-')}`) ? "primary.main" : "transparent",
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
          <Box
              sx={{
                flex: 1,
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
          >
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
                    navigate(`/${item.toLowerCase().replace(/\s+/g, '-')}`);
                  }}
                  sx={{
                    borderRadius: 0, 
                    // Make the entire borderBottom property conditional
                    borderBottom: active.startsWith(`/${item.toLowerCase().replace(/\s+/g, '-')}`)
                      ? "5px solid" 
                      : "5px solid transparent", 
                    borderColor: active.startsWith(`/${item.toLowerCase().replace(/\s+/g, '-')}`) ? "primary.main" : "transparent"
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