"use client";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Slide,
  Box,
  Typography,
  Avatar,
  Stack,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { forwardRef, useState } from "react";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";

const Transition = forwardRef(function Transition(
  props: TransitionProps & { children: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface CheckoutProps {
  open: boolean;
  onClose: () => void;
  onSubmit: () => void;
}

export default function Checkout({ open, onClose, onSubmit }: CheckoutProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.address) return;
    onSubmit(); // from parent
    onClose();
    setForm({ name: "", email: "", address: "" });
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      TransitionComponent={Transition}
      fullWidth
      maxWidth="sm"
      PaperProps={{
        sx: {
          borderRadius: 4,
          p: 0,
          bgcolor: "#f8f9fb",
          boxShadow: "0 8px 40px 0 rgba(127,0,255,0.10)",
        },
      }}
    >
      <DialogTitle
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          background: "linear-gradient(90deg, #181c24 0%, #2d2250 100%)",
          color: "#fff",
          fontWeight: 700,
          fontSize: "1.4rem",
          pb: 2,
        }}
      >
        <Avatar
          sx={{
            bgcolor: "secondary.main",
            width: 40,
            height: 40,
            boxShadow: 2,
          }}
        >
          <ShoppingCartCheckoutIcon />
        </Avatar>
        Checkout
      </DialogTitle>
      <DialogContent sx={{ pt: 3 }}>
        <Typography variant="subtitle1" color="text.secondary" my={2}>
          Please fill in your details to complete the order.
        </Typography>
        <Stack spacing={2}>
          <TextField
            name="name"
            label="Full Name"
            fullWidth
            onChange={handleChange}
            value={form.name}
            variant="outlined"
            autoFocus
            InputProps={{
              sx: { borderRadius: 2, bgcolor: "#fff" },
            }}
          />
          <TextField
            name="email"
            label="Email Address"
            fullWidth
            onChange={handleChange}
            value={form.email}
            variant="outlined"
            type="email"
            InputProps={{
              sx: { borderRadius: 2, bgcolor: "#fff" },
            }}
          />
          <TextField
            name="address"
            label="Shipping Address"
            fullWidth
            multiline
            rows={3}
            onChange={handleChange}
            value={form.address}
            variant="outlined"
            InputProps={{
              sx: { borderRadius: 2, bgcolor: "#fff" },
            }}
          />
        </Stack>
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 2, pt: 3 }}>
        <Button
          onClick={onClose}
          color="inherit"
          sx={{
            borderRadius: 99,
            px: 3,
            fontWeight: 600,
            bgcolor: "#fff",
            boxShadow: "none",
            border: "1px solid #ececec",
            "&:hover": { bgcolor: "#f5f5f5" },
          }}
        >
          Cancel
        </Button>
        <Button
          onClick={handleSubmit}
          variant="contained"
          sx={{
            borderRadius: 99,
            px: 3,
            fontWeight: 700,
            background: "#f5a008",
            boxShadow: "0 2px 8px 0 rgba(127,0,255,0.10)",
            textTransform: "none",
            fontSize: "1.08rem",
          }}
        >
          Submit Order
        </Button>
      </DialogActions>
    </Dialog>
  );
}
