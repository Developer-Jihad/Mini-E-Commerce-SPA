"use client";

import { Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import ProductCard from "./ProductCard";
import { products } from "@/data/products";

export default function ProductGrid() {
  return (
    <Container id="products" sx={{ py: 8 }}>
      <Typography variant="h4" gutterBottom fontWeight={600}>
        Leatest Products
      </Typography>
      <br />
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {products.map((product) => (
          <Grid key={product.id} size={{ xs: 4, sm: 4, md: 4 }}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
