"use client";

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Menu,
  MenuItem,
  Box,
  Button,
  useMediaQuery,
  useTheme,
  Drawer,
  Stack,
  alpha,
  Tooltip,
  Container,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import CartSidebar from "./CartSidebar";

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const cartItems = useSelector((state: RootState) => state.cart.items);
  const itemCount = cartItems.reduce(
    (sum, item) => sum + (item.quantity || 1),
    0
  );

  const handleProfileClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileClose = () => {
    setAnchorEl(null);
  };

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  const navLinks = (
    <>
      <Button
        color="inherit"
        component={Link}
        href="/"
        sx={{
          fontWeight: 600,
          letterSpacing: 1,
          px: 2,
          borderRadius: 99,
          transition: "background 0.2s",
          "&:hover": {
            background: alpha(theme.palette.common.white, 0.08),
          },
        }}
      >
        Home
      </Button>
      <Button
        color="inherit"
        component={Link}
        href="/#products"
        sx={{
          fontWeight: 600,
          letterSpacing: 1,
          px: 2,
          borderRadius: 99,
          transition: "background 0.2s",
          "&:hover": {
            background: alpha(theme.palette.common.white, 0.08),
          },
        }}
      >
        Products
      </Button>
      <Button
        color="inherit"
        component={Link}
        href="#about"
        sx={{
          fontWeight: 600,
          letterSpacing: 1,
          px: 2,
          borderRadius: 99,
          transition: "background 0.2s",
          "&:hover": {
            background: alpha(theme.palette.common.white, 0.08),
          },
        }}
      >
        About
      </Button>
    </>
  );

  return (
    <>
      <AppBar
        position="fixed"
        color="primary"
        elevation={4}
        sx={{
          top: 0,
          zIndex: (theme) => theme.zIndex.drawer + 1,
          background: "linear-gradient(90deg, #181c24 0%, #2d2250 100%)",
          boxShadow: "0 4px 24px 0 rgba(127,0,255,0.10)",
        }}
      >
        <Container maxWidth="lg" disableGutters={true}>
          <Toolbar
            sx={{
              justifyContent: "space-between",
              minHeight: { xs: 65, sm: 65 },
              px: { xs: 1, sm: 3 },
            }}
          >
            {/* Left: Logo */}
            <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
              <Typography variant="h5" fontWeight={700}>
                🛍️ ShopMate
              </Typography>
            </Link>

            {/* Center: Navigation Links (hide on mobile) */}
            {!isMobile && (
              <Box sx={{ display: "flex", gap: 2 }}>{navLinks}</Box>
            )}

            {/* Right: Icons */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              {/* Cart Button */}
              <Tooltip title="View Cart" arrow>
                <IconButton
                  color="inherit"
                  onClick={toggleCart}
                  sx={{
                    borderRadius: 99,
                    background: "rgba(255,255,255,0.08)",
                    transition: "background 0.2s",
                    "&:hover": {
                      background: "rgba(255,255,255,0.18)",
                    },
                  }}
                >
                  <Badge
                    badgeContent={itemCount}
                    color="secondary"
                    sx={{
                      "& .MuiBadge-badge": {
                        fontWeight: 700,
                        fontSize: "0.85rem",
                        minWidth: 20,
                        height: 20,
                      },
                    }}
                  >
                    <ShoppingCartIcon sx={{ fontSize: 26 }} />
                  </Badge>
                </IconButton>
              </Tooltip>

              {/* Profile Menu */}
              <Tooltip title="Profile" arrow>
                <IconButton
                  color="inherit"
                  onClick={handleProfileClick}
                  sx={{
                    borderRadius: 99,
                    background: "rgba(255,255,255,0.08)",
                    transition: "background 0.2s",
                    "&:hover": {
                      background: "rgba(255,255,255,0.18)",
                    },
                  }}
                >
                  <AccountCircle sx={{ fontSize: 28 }} />
                </IconButton>
              </Tooltip>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleProfileClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                disableScrollLock
                PaperProps={{
                  sx: {
                    mt: 1,
                    minWidth: 200,
                    borderRadius: 2,
                    boxShadow: "0 4px 24px 0 rgba(127,0,255,0.10)",
                    bgcolor: "#fff",
                    color: "#222",
                    fontWeight: 500,
                  },
                }}
              >
                <MenuItem onClick={handleProfileClose}>Sign In</MenuItem>
                <MenuItem onClick={handleProfileClose}>Sign Up</MenuItem>
                <MenuItem onClick={handleProfileClose}>Order History</MenuItem>
              </Menu>

              {/* Hamburger menu for mobile */}
              {isMobile && (
                <>
                  <IconButton
                    color="inherit"
                    onClick={() => setMobileMenuOpen((prev) => !prev)}
                    sx={{
                      borderRadius: 99,
                      background: "rgba(255,255,255,0.08)",
                      transition: "background 0.2s",
                      "&:hover": {
                        background: "rgba(255,255,255,0.18)",
                      },
                    }}
                  >
                    {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
                  </IconButton>
                  <Drawer
                    anchor="right"
                    open={mobileMenuOpen}
                    onClose={() => setMobileMenuOpen(false)}
                    PaperProps={{
                      sx: {
                        bgcolor: "#181c24",
                        color: "#fff",
                        width: 220,
                        p: 2,
                      },
                    }}
                  >
                    <Box
                      sx={{
                        mt: 10,
                        py: 3,
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                        height: "100%",
                      }}
                    >
                      {navLinks}
                    </Box>
                  </Drawer>
                </>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Cart Sidebar */}
      <CartSidebar open={cartOpen} toggle={toggleCart} />
    </>
  );
}
