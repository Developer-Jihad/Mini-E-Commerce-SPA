"use client";

import { Box, Typography, Button, Container } from "@mui/material";

export default function HeroSection() {
  return (
    <Box
      sx={{
        backgroundImage: `url('https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1600&q=80')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        textAlign: "center",
        p: 1,
        mt: 8,
        position: "relative",
        "&:before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          bgcolor: "rgba(0,0,0,0.6)",
        },
      }}
    >
      <Container sx={{ position: "relative", zIndex: 2 }}>
        <Typography
          variant="h3"
          fontWeight={700}
          gutterBottom
          sx={{
            color: "#fff",
            fontSize: {
              xs: "2rem",
              sm: "2rem",
              md: "2.5rem",
              lg: "3rem",
            },
          }}
        >
          Discover Smart Gadgets
        </Typography>

        <Typography mb={4} sx={{ color: "#fff" }}>
          Shop the latest tech — wireless, wearable, and wonderful.
          <br />
          Find exclusive deals on smart phones, smart watches, speakers, and all
          in one place.
        </Typography>
        <Button
          href="#products"
          variant="contained"
          size="large"
          sx={{
            color: "#fff",
            background:
              "linear-gradient(90deg, #7F00FF 0%,rgb(206, 33, 157) 100%)",
            boxShadow: "0 4px 20px 0 rgba(127,0,255,0.15)",
            borderRadius: "30px",
            px: 5,
            py: 1.5,
            fontWeight: 700,
            fontSize: "1.1rem",
            textTransform: "none",
            transition: "background 0.3s, transform 0.2s",
            "&:hover": {
              background:
                "linear-gradient(90deg,rgb(206, 33, 157) 0%,  #7F00FF 100%)",
              transform: "scale(1.05)",
            },
          }}
        >
          Explore Now
        </Button>
      </Container>
    </Box>
  );
}
