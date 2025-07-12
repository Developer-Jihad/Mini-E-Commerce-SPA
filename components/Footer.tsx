"use client";

import {
  Box,
  Container,
  Typography,
  Link,
  Stack,
  Divider,
  IconButton,
} from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 8,
        py: { xs: 4, sm: 5 },
        px: 2,
        background: "linear-gradient(90deg, #181c24 0%, #2d2250 100%)",
        color: "#c9d1d9",
        borderTop: "1px solid #30363d",
        boxShadow: "0 -2px 24px 0 rgba(127,0,255,0.10)",
      }}
    >
      <Container maxWidth="lg" disableGutters={true}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="space-between"
          alignItems={{ xs: "center", sm: "flex-end" }}
          sx={{ maxWidth: "1140px", mx: "auto" }}
        >
          {/* Left: Branding */}
          <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent={{ xs: "center", sm: "flex-start" }}
              spacing={1}
              mb={1}
            >
              <Box
                component="span"
                sx={{
                  fontSize: "2rem",
                  display: "inline-block",
                  mr: 1,
                  transform: "translateY(2px)",
                }}
              >
                🛍️
              </Box>
              <Typography variant="h5" fontWeight="bold" letterSpacing={1}>
                ShopMate
              </Typography>
            </Stack>
            <Typography>Enjoy the best Shopping Experience with us!</Typography>
            <Typography variant="body2" color="#8b949e" mt={1}>
              &copy; {new Date().getFullYear()} ShopMate Inc. All rights
              reserved.
            </Typography>
          </Box>

          {/* Divider for mobile */}
          <Divider
            sx={{ display: { xs: "block", sm: "none" }, my: 2, width: "100%" }}
          />

          {/* Right: Developer Info */}
          <Box
            id="about"
            sx={{ minWidth: 220, textAlign: { xs: "center", sm: "right" } }}
          >
            <Typography variant="body2" fontWeight="bold" color="#fff">
              Developed by - Md Jihad Hossain
            </Typography>

            <Stack
              direction="row"
              sx={{ justifyContent: { xs: "center", sm: "right" } }}
              spacing={2}
              mt={1}
            >
              <IconButton
                href="https://jihad-info.vercel.app/"
                target="_blank"
                aria-label="Portfolio"
                sx={{
                  color: "#fff",
                  bgcolor: "rgba(127,0,255,0.12)",
                  "&:hover": { bgcolor: "primary.main", color: "#fff" },
                  transition: "all 0.2s",
                }}
              >
                <LanguageIcon />
              </IconButton>
              <IconButton
                href="https://www.linkedin.com/in/developer-jihad/"
                target="_blank"
                aria-label="LinkedIn"
                sx={{
                  color: "#fff",
                  bgcolor: "rgba(0,119,181,0.12)",
                  "&:hover": { bgcolor: "#0077b5", color: "#fff" },
                  transition: "all 0.2s",
                }}
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                href="mailto:jihad.developer.bd@gmail.com"
                aria-label="Email"
                sx={{
                  color: "#fff",
                  bgcolor: "rgba(255,0,80,0.12)",
                  "&:hover": { bgcolor: "#ff0050", color: "#fff" },
                  transition: "all 0.2s",
                }}
              >
                <EmailIcon />
              </IconButton>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
