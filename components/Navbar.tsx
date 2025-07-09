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
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
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
      <Button color="inherit" component={Link} href="/">
        Home
      </Button>
      <Button color="inherit" component={Link} href="/products">
        Products
      </Button>
      <Button color="inherit" component={Link} href="/about">
        About Us
      </Button>
    </>
  );

  return (
    <>
      <AppBar
        position="fixed"
        color="primary"
        sx={{
          top: 0,
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Left: Logo */}
          <Typography
            variant="h6"
            component={Link}
            href="/"
            sx={{ textDecoration: "none", color: "white" }}
          >
            🛍️ ShopMate
          </Typography>

          {/* Center: Navigation Links (hide on mobile) */}
          {!isMobile && <Box sx={{ display: "flex", gap: 2 }}>{navLinks}</Box>}

          {/* Right: Icons */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            {/* Cart Button */}
            <IconButton color="inherit" onClick={toggleCart}>
              <Badge badgeContent={itemCount} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>

            {/* Profile Menu */}
            <IconButton color="inherit" onClick={handleProfileClick}>
              <AccountCircle />
            </IconButton>
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
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <MenuIcon />
                </IconButton>
                <Drawer
                  anchor="right"
                  open={mobileMenuOpen}
                  onClose={() => setMobileMenuOpen(false)}
                >
                  <Box
                    sx={{
                      width: 200,
                      p: 2,
                      display: "flex",
                      flexDirection: "column",
                      gap: 1,
                    }}
                  >
                    {navLinks}
                  </Box>
                </Drawer>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Cart Sidebar */}
      <CartSidebar open={cartOpen} toggle={toggleCart} />
    </>
  );
}
