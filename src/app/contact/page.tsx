"use client";

import {
  Container,
  Typography,
  Box,
  BoxProps,
  Button,
  ButtonProps,
} from "@mui/material";
import styled, { keyframes } from "styled-components";
import Header, { HEADER_HEIGHT } from "@/shared/ui/Header";
import Footer from "@/shared/ui/Footer";
import Link from "next/link";

import { useContactForm } from "@/features/contact-form/model/useContactForm";
import { ContactForm } from "@/features/contact-form/ui/ContactForm";

const FOOTER_HEIGHT = "80px";

const grandioseEntrance = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.7) translateY(30px) rotateX(-20deg);
    filter: blur(3px);
  }
  60% {
    opacity: 1;
    transform: scale(1.05) translateY(-10px) rotateX(5deg);
    filter: blur(0);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0) rotateX(0deg);
    filter: blur(0);
  }
`;

const AnimatedResponseBox = styled(Box)<BoxProps>`
  text-align: center;
  padding: 2.5rem;
  background: ${(props) => props.theme.palette.background.paper};
  border-radius: 10px;
  box-shadow: ${(props) => props.theme.shadows[4]};
  animation: ${grandioseEntrance} 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    forwards;
  overflow: hidden;
  max-width: 550px;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  .MuiTypography-root {
    color: ${(props) => props.theme.palette.text.primary};
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 1.4;
    margin-bottom: 1.75rem;
  }
`;

const HomeButton = styled(Button)<ButtonProps>`
  && {
    margin-top: 1rem;
    padding: 0.6rem 1.5rem;
    font-size: 0.9rem;
    background-color: ${(props) => props.theme.palette.primary.main};
    color: ${(props) => props.theme.palette.primary.contrastText};
    &:hover {
      background-color: ${(props) => props.theme.palette.primary.dark};
    }
  }
`;

interface ContactSectionProps {
  $isResponseDisplayed?: boolean;
}

const ContactSection = styled.section<ContactSectionProps>`
  background-color: ${(props) => props.theme.palette.background.default};
  flex-grow: 1;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${({ $isResponseDisplayed }) =>
    $isResponseDisplayed ? "center" : "flex-start"};
  width: 100%;
`;

const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContentContainer = styled.main`
  flex-grow: 1;
  overflow-y: auto;
  padding-top: ${HEADER_HEIGHT};
  padding-bottom: ${FOOTER_HEIGHT};
  display: flex;
  flex-direction: column;
`;

export default function Contact() {
  const { formData, response, error, isLoading, handleChange, handleSubmit } =
    useContactForm();

  return (
    <PageLayout>
      <Header />
      <MainContentContainer>
        <ContactSection $isResponseDisplayed={!!response}>
          {response ? (
            <AnimatedResponseBox>
              <Typography variant="h5" component="p" gutterBottom>
                {response}
              </Typography>
              <Link href="/">
                <HomeButton variant="contained">HOME</HomeButton>
              </Link>
            </AnimatedResponseBox>
          ) : (
            <Container maxWidth="lg">
              <Typography
                variant="h2"
                component="h1"
                align="center"
                gutterBottom
                sx={{
                  mb: 4,
                  color: (theme) => theme.palette.text.primary,
                }}
              >
                Contact Us
              </Typography>
              <ContactForm
                formData={formData}
                isLoading={isLoading}
                error={error}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
              />
            </Container>
          )}
        </ContactSection>
      </MainContentContainer>
      <Footer />
    </PageLayout>
  );
}
