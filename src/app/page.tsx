"use client";

import { Container, Typography, Box, Button } from "@mui/material";
import styled, { keyframes } from "styled-components";
import Link from "next/link";
import Header, { HEADER_HEIGHT } from "@/shared/ui/Header";
import Footer from "@/shared/ui/Footer";
import YouTubePlayer from "@/shared/ui/YouTubePlayer";
import InfoBlockWithButton from "@/widgets/InfoBlockWithButton";
import CallToActionBlock from "@/widgets/CallToActionBlock";

const FOOTER_HEIGHT = "80px";

const animatedGradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Define theme-dependent gradient colors
const lightGradientColors = [
  "#E91E63",
  "#673AB7",
  "#2196F3",
  "#4CAF50",
  "#FFC107",
  "#E91E63",
]; // Added start color at end for smooth loop
const darkGradientColors = [
  "#F06292",
  "#9575CD",
  "#64B5F6",
  "#81C784",
  "#FFF176",
  "#F06292",
];

const GradientTextWrapper = styled.span`
  display: inline-block;
  background: ${(props) =>
    `linear-gradient(45deg, ${(props.theme.palette.mode === "light"
      ? lightGradientColors
      : darkGradientColors
    ).join(", ")})`};
  background-size: 400% 400%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent;
  animation: ${animatedGradient} 10s ease infinite;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContentContainer = styled.main`
  flex-grow: 1;
  overflow-y: auto;
  padding-top: ${HEADER_HEIGHT};
  padding-bottom: ${FOOTER_HEIGHT};
  background-color: ${(props) => props.theme.palette.background.default};
`;

const MainSection = styled.section`
  padding: 4rem 0;
  background-color: ${(props) =>
    props.theme.palette.mode === "light"
      ? props.theme.palette.grey[100]
      : props.theme.palette.background.paper};
`;

export default function Home() {
  return (
    <ContentWrapper>
      <Header />
      <MainContentContainer>
        <MainSection>
          <Container maxWidth="lg">
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: 4,
              }}
            >
              <Box sx={{ flex: 1 }}>
                <Typography
                  variant="h2"
                  component="h1"
                  gutterBottom
                  sx={{ fontWeight: "bold" }}
                >
                  <GradientTextWrapper>
                    Welcome to Our Platform
                  </GradientTextWrapper>
                </Typography>
                <Typography
                  variant="h5"
                  component="h2"
                  gutterBottom
                  color="text.secondary"
                >
                  Discover amazing features and possibilities
                </Typography>
                <Typography variant="body1" paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
                <Link href="/contact">
                  <Button variant="contained" color="primary" size="large">
                    Contact Us
                  </Button>
                </Link>
              </Box>
              <Box sx={{ flex: 1 }}>
                <YouTubePlayer
                  videoId="dQw4w9WgXcQ"
                  title="Welcome to our platform"
                />
              </Box>
            </Box>
          </Container>
        </MainSection>
        <InfoBlockWithButton />
        <CallToActionBlock />
      </MainContentContainer>
      <Footer />
    </ContentWrapper>
  );
}
