"use client";

import React, { useState } from "react";
import { Product } from "@/components/ProductCard";
import {
  Box,
  Button,
  Typography,
  Grid,
  Chip,
  Stack,
  Paper,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../store/slices/cartSlice";
import { AppDispatch } from "../../../store/store";
import Image from "next/image";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Link from "next/link";

function getProductImages(product: Product) {
  return [product.image, product.image2, product.image3];
}

type ClientProps = {
  product: Product;
  relatedProducts: Product[];
};

export default function ProductDetailClient({
  product,
  relatedProducts,
}: ClientProps) {
  const dispatch: AppDispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState(
    getProductImages(product)[0]
  );
  const productImages = getProductImages(product);

  const [showFullDesc, setShowFullDesc] = useState(false);
  const descPreview = product.description.split(" ").slice(0, 130).join(" ");
  const isLongDesc = product.description.split(" ").length > 130;

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <Box sx={{ maxWidth: "1200px", mx: "auto", mt: 16, px: 2, mb: 6 }}>
      <Grid container spacing={6} justifyContent="space-between">
        {/* Left: Product Images */}
        <Grid sx={{ width: { xs: "100%", md: "47%" } }}>
          <Paper
            elevation={4}
            sx={{
              width: "100%",
              height: { xs: 400, sm: 450 },
              position: "relative",
              borderRadius: 4,
              overflow: "hidden",
              border: "1px solid #ececec",
              bgcolor: "#fff",
              p: 2,
              mb: 2,
            }}
          >
            <Image
              src={selectedImage || product.image}
              alt={product.title}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 600px) 100vw, 50vw"
              priority
            />
          </Paper>
          <Stack direction="row" spacing={2} mt={1} justifyContent="center">
            {productImages.map((img, idx) => (
              <Box
                key={img}
                sx={{
                  border:
                    selectedImage === img
                      ? "2px solid #7F00FF"
                      : "2px solid #ececec",
                  borderRadius: 2,
                  overflow: "hidden",
                  width: 64,
                  height: 64,
                  cursor: "pointer",
                  transition: "border 0.2s",
                  position: "relative",
                  bgcolor: "#fff",
                }}
                onClick={() => setSelectedImage(img)}
              >
                <Image
                  src={img || product.image}
                  alt={product.title + " thumbnail " + (idx + 1)}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="64px"
                />
              </Box>
            ))}
          </Stack>
        </Grid>

        {/* Right: Details */}
        <Grid sx={{ width: { xs: "100%", md: "48%" } }}>
          <Stack spacing={2}>
            <Typography
              variant="h4"
              component="h1"
              fontWeight="bold"
              color="text.primary"
            >
              {product.title}
            </Typography>
            <Stack direction="row" spacing={1} alignItems="center">
              <Chip
                label="In Stock"
                color="success"
                size="small"
                sx={{ width: "fit-content", fontWeight: 600 }}
              />

              <Typography
                variant="h5"
                fontWeight={700}
                sx={{
                  mb: 1,
                  pl: 1,
                  color: "#f5a008",
                  display: "inline-block",
                }}
              >
                ${product.price.toFixed(2)}
              </Typography>
            </Stack>
            <Typography
              variant="body1"
              color="text.secondary"
              align="justify"
              sx={{ mb: 2 }}
            >
              {showFullDesc || !isLongDesc
                ? product.description
                : descPreview + "..."}
            </Typography>
            {isLongDesc && (
              <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
                <Button
                  variant="text"
                  sx={{
                    px: 0,
                    fontWeight: 600,
                    color: "primary.main",
                  }}
                  onClick={() => setShowFullDesc((prev) => !prev)}
                >
                  {showFullDesc ? "Show less" : "Read more"}
                </Button>
              </Box>
            )}
            <Button
              variant="contained"
              size="large"
              startIcon={<ShoppingCartIcon />}
              onClick={handleAddToCart}
              sx={{
                borderRadius: 99,
                fontWeight: 700,
                fontSize: "1.08rem",
                py: 1.3,
                background: "#f5a008",
                boxShadow: "0 2px 8px 0 rgba(127,0,255,0.10)",
                textTransform: "none",
                transition: "background 0.3s, transform 0.2s",
              }}
            >
              Add to Cart
            </Button>
          </Stack>
        </Grid>
      </Grid>

      {/* Related Products */}
      <Box mt={8}>
        <Typography variant="h5" fontWeight={700} mb={3} color="primary.main">
          Related Products
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {relatedProducts.map((rel) => (
            <Grid key={rel.id} size={{ xs: 4, sm: 4, md: 3 }}>
              <Paper
                elevation={2}
                sx={{
                  height: "100%",
                  width: "100%",
                  borderRadius: 3,
                  textAlign: "center",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "box-shadow 0.2s, transform 0.2s",
                  "&:hover": {
                    boxShadow: "0 4px 24px 0 rgba(127,0,255,0.10)",
                    transform: "translateY(-4px) scale(1.03)",
                  },
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    minHeight: "200px",
                    mb: 2,
                  }}
                >
                  <Image
                    src={rel.image}
                    alt={rel.title}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 600px) 100vw, 25vw"
                  />
                </Box>
                <Box sx={{ p: 2 }}>
                  <Typography
                    variant="h6"
                    fontWeight={600}
                    color="text.primary"
                    noWrap
                    sx={{ mb: 1 }}
                  >
                    ${rel.price.toFixed(2)}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    fontWeight={600}
                    noWrap
                    sx={{ mb: 1 }}
                  >
                    {rel.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 1 }}
                  >
                    {rel.description.slice(0, 35)}...
                  </Typography>
                  <Link href={`/product/${rel.id}`} passHref>
                    <Box
                      component="a"
                      sx={{
                        color: "primary.main",
                        fontWeight: 600,
                        textDecoration: "none",
                      }}
                    >
                      View Details
                    </Box>
                  </Link>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
