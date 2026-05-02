import { useState } from "react";
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
import { getTheme } from "../theme/theme";

const navItems = [ "HOME", "NMTC", "NPTC", "NCTC", "NBTC", "Community Resources", "AI Tutor" ];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("HOME");

  return (
    <>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          
          {/* Left: Logo */}
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Olympiad Hub
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {navItems.map((item) => (
              <Button
                key={item}
                color="inherit"
                onClick={() => setActive(item)}
                sx={{
                  borderColor: active === item ? `primary.main` : `transparent`,
                  borderBottom: 5,
                  borderStyle: "solid",
                  "&:hover": {
                    borderBottom: `2px solid primary.main`,
                  },
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
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}