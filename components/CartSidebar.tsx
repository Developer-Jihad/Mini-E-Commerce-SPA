"use client";

import {
  Box,
  Drawer,
  Typography,
  IconButton,
  Divider,
  Button,
  Stack,
  Tooltip,
  Fade,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store/store";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} from "../store/slices/cartSlice";
import CheckoutModal from "./CheckoutModal";
import { useState } from "react";

type Props = {
  open: boolean;
  toggle: () => void;
};

export default function CartSidebar({ open, toggle }: Props) {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch<AppDispatch>();
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={toggle}
      PaperProps={{
        sx: {
          width: { xs: "100vw", sm: 400 },
          bgcolor: "#f8f9fb",
          boxShadow: 6,
          borderTopLeftRadius: { xs: 0, sm: 16 },
          borderBottomLeftRadius: { xs: 0, sm: 16 },
          p: 0,
        },
      }}
      transitionDuration={300}
    >
      {/* Header */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        px={3}
        py={2}
        mt={8}
        sx={{
          borderBottom: "1px solid #ececec",
          bgcolor: "#fff",
          borderTopLeftRadius: { xs: 0, sm: 16 },
        }}
      >
        <Typography variant="h6" fontWeight={700} color="primary.main">
          🛒 Your Cart
        </Typography>
        <Tooltip title="Close" arrow TransitionComponent={Fade}>
          <IconButton onClick={toggle} size="large">
            <CloseIcon />
          </IconButton>
        </Tooltip>
      </Box>
      {/* Cart Items */}
      <Box flexGrow={1} overflow="auto" px={3} py={2} minHeight={180}>
        {cartItems.length === 0 ? (
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            height="180px"
            color="text.secondary"
          >
            <ShoppingCartCheckoutIcon
              sx={{ fontSize: 48, mb: 1, color: "#e0e0e0" }}
            />
            <Typography variant="body1" fontWeight={500}>
              Your cart is empty.
            </Typography>
          </Box>
        ) : (
          cartItems.map((item) => (
            <Box
              key={item.id}
              sx={{
                mb: 2,
                p: 2,
                borderRadius: 3,
                bgcolor: "#fff",
                boxShadow: "0 2px 12px 0 rgba(127,0,255,0.04)",
                display: "flex",
                alignItems: "center",
                gap: 2,
                transition: "box-shadow 0.2s",
                "&:hover": {
                  boxShadow: "0 4px 24px 0 rgba(127,0,255,0.10)",
                },
              }}
            >
              <Box
                component="img"
                src={item.image}
                alt={item.title}
                sx={{
                  width: 64,
                  height: 64,
                  objectFit: "cover",
                  borderRadius: 2,
                  border: "1px solid #ececec",
                  boxShadow: "0 1px 4px 0 rgba(0,0,0,0.04)",
                  mr: 1,
                  bgcolor: "#f5f5f5",
                }}
              />
              <Box flexGrow={1} minWidth={0}>
                <Typography
                  fontWeight={700}
                  noWrap
                  sx={{ fontSize: "1.05rem" }}
                >
                  {item.title}
                </Typography>
                <Typography
                  color="primary"
                  fontWeight={600}
                  sx={{ fontSize: "1rem" }}
                >
                  ${item.price.toFixed(2)}
                </Typography>
                <Stack direction="row" alignItems="center" spacing={1} mt={1}>
                  <IconButton
                    size="small"
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                    sx={{
                      border: "1px solid #e0e0e0",
                      bgcolor: "#fafafa",
                      "&:hover": { bgcolor: "#f0f0f0" },
                    }}
                  >
                    <RemoveIcon fontSize="small" />
                  </IconButton>
                  <Typography fontWeight={600} minWidth={24} textAlign="center">
                    {item.quantity}
                  </Typography>
                  <IconButton
                    size="small"
                    onClick={() => dispatch(increaseQuantity(item.id))}
                    sx={{
                      border: "1px solid #e0e0e0",
                      bgcolor: "#fafafa",
                      "&:hover": { bgcolor: "#f0f0f0" },
                    }}
                  >
                    <AddIcon fontSize="small" />
                  </IconButton>
                </Stack>
              </Box>
              <Tooltip title="Remove" arrow TransitionComponent={Fade}>
                <IconButton
                  color="error"
                  onClick={() => dispatch(removeFromCart(item.id))}
                  sx={{
                    bgcolor: "#fff",
                    border: "1px solid #ffeaea",
                    "&:hover": { bgcolor: "#fff0f0" },
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
            </Box>
          ))
        )}
      </Box>

      <Divider sx={{ my: 0 }} />

      {/* Footer: Total & Checkout */}
      <Box
        px={3}
        py={2}
        bgcolor="#fff"
        borderBottomLeftRadius={{ xs: 0, sm: 16 }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <Typography
            variant="subtitle1"
            fontWeight={600}
            color="text.secondary"
          >
            Total:
          </Typography>
          <Typography
            variant="h6"
            fontWeight={700}
            color="primary.main"
            sx={{ fontSize: "1.25rem" }}
          >
            ${total.toFixed(2)}
          </Typography>
        </Box>
        <Button
          variant="contained"
          fullWidth
          size="large"
          startIcon={<ShoppingCartCheckoutIcon />}
          disabled={cartItems.length === 0}
          onClick={() => setCheckoutOpen(true)}
          sx={{
            borderRadius: 99,
            fontWeight: 700,
            fontSize: "1.08rem",
            py: 1.3,
            background:
              "linear-gradient(90deg, #7F00FF 0%, #0072ff 100%)!important",
            boxShadow: "0 2px 8px 0 rgba(127,0,255,0.10)",
            textTransform: "none",
            transition: "background 0.3s",
            "&:hover": {
              background:
                "linear-gradient(90deg, #0072ff 0%, #7F00FF 100%)!important",
            },
          }}
        >
          Checkout
        </Button>
        <CheckoutModal
          open={checkoutOpen}
          onClose={() => setCheckoutOpen(false)}
          onSubmit={() => {
            dispatch(clearCart());
            setCheckoutOpen(false);
            toggle();
          }}
        />
      </Box>
    </Drawer>
  );
}
