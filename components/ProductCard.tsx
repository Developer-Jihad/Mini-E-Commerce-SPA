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

// example definition
export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  image2?: string;
  image3?: string;
  category?: string;
  [key: string]: any;
}

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
      <Link href={`/product/${product.id}`}>
        <Box sx={{ position: "relative" }}>
          <CardMedia
            component="img"
            image={product.image}
            height="250"
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
        </Box>
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography
            variant="h5"
            fontWeight={700}
            gutterBottom
            sx={{
              color: "#222",
              fontSize: "1.2rem",
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
              textAlign: "justify",
            }}
          >
            {product.description}
          </Typography>
        </CardContent>
      </Link>
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
            fontSize: "1.25rem",
            color: "#f5a008",
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
            borderColor: "#f5a008",
            color: "#f5a008",
            fontWeight: 700,
            textTransform: "none",
            fontSize: "1rem",
            px: 3,
            py: 1.2,
            boxShadow: "none",
            background: "transparent",
            transition: "background 0.3s, color 0.3s, border-color 0.3s",
            "&:hover": {
              background: "#f5a008",
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
