"use client";

import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
  Chip,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { addToCart } from "@/store/slices/cartSlice";
import Link from "next/link";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

type Product = {
  id: string;
  title: string;
  image: string;
  price: number;
  description: string;
};

export default function ProductCard({ product }: { product: Product }) {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: 4,
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
        background: "rgba(255,255,255,0.95)",
        transition: "transform 0.2s, box-shadow 0.2s",
        "&:hover": {
          transform: "translateY(-8px) scale(1.03)",
          boxShadow: "0 16px 40px 0 rgba(127,0,255,0.18)",
        },
      }}
    >
      <Box sx={{ position: "relative" }}>
        <Link href={`/product/${product.id}`}>
          <CardMedia
            component="img"
            image={product.image}
            height="220"
            alt={product.title}
            sx={{
              objectFit: "cover",
              borderTopLeftRadius: 16,
              borderTopRightRadius: 16,
              transition: "filter 0.3s",
              filter: "brightness(0.96)",
              "&:hover": { filter: "brightness(1)" },
            }}
          />
        </Link>
      </Box>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography
          variant="subtitle1"
          fontWeight={700}
          gutterBottom
          sx={{
            color: "#222",
            fontSize: "1.1rem",
            mb: 0.5,
            minHeight: 48,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {product.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            minHeight: 36,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {product.description}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          mt: "auto",
          px: 2,
          pb: 2,
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: "1.15rem",
            color: "primary.main",
            letterSpacing: 0.5,
            flex: "1 1 auto",
            mb: 0,
          }}
        >
          ${product.price.toFixed(2)}
        </Typography>
        <Button
          variant="outlined"
          fullWidth={false}
          startIcon={<ShoppingCartIcon />}
          sx={{
            borderRadius: 99,
            borderWidth: 2,
            borderColor: "primary.main",
            color: "primary.main",
            fontWeight: 700,
            textTransform: "none",
            fontSize: "1rem",
            px: 3,
            py: 1.2,
            boxShadow: "none",
            background: "transparent",
            transition: "background 0.3s, color 0.3s, border-color 0.3s",
            "&:hover": {
              background: "linear-gradient(90deg, #7F00FF 0%, #0072ff 100%)",
              color: "#fff",
              borderColor: "transparent",
              boxShadow: "0 2px 8px 0 rgba(127,0,255,0.10)",
            },
          }}
          onClick={() => dispatch(addToCart(product))}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}
