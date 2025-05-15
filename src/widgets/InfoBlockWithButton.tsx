"use client";

import {
  Container,
  Typography,
  Box,
  BoxProps,
  Button,
  ButtonProps,
  Paper,
  PaperProps,
  TypographyProps,
} from "@mui/material";
import styled from "styled-components";
import Link from "next/link";

const StyledInfoBlock = styled(Box)<BoxProps>`
  padding: 4rem 0;
  text-align: center;
  background-color: ${(props) => props.theme.palette.background.default};
`;

const Title = styled(Typography)`
  && {
    margin-bottom: 3rem;
    color: ${(props) => props.theme.palette.text.primary};
    font-weight: bold;
    font-size: 2.5rem;
  }
`;

const SectionCard = styled(Paper)<PaperProps>`
  padding: 2rem;
  text-align: left;
  height: 100%;
  background-color: ${(props) =>
    props.theme.palette.mode === "light"
      ? props.theme.palette.grey[100]
      : props.theme.palette.background.paper};
  color: ${(props) => props.theme.palette.text.secondary};
  box-shadow: ${(props) => props.theme.shadows[2]};
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  will-change: transform, box-shadow;

  &:hover {
    transform: translateY(-10px) perspective(1000px) rotateX(2deg)
      rotateY(-2deg) scale(1.03);
    box-shadow: ${(props) => props.theme.shadows[8]};
  }
`;

const SectionTitle = styled(Typography)`
  && {
    font-weight: bold;
    margin-bottom: 0.75rem;
    color: ${(props) => props.theme.palette.text.primary};
    font-size: 1.25rem;
  }
`;

const SectionText = styled(Typography)<TypographyProps>`
  margin-top: 0.5rem;
  font-size: 0.95rem;
  line-height: 1.6;
  color: ${(props) => props.theme.palette.text.secondary};
`;

const InfoGrid = styled(Box)<BoxProps>`
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ContactButton = styled(Button)<ButtonProps>`
  margin-top: 2rem;
  padding: 0.75rem 2rem;
  font-size: 1rem;
`;

interface SectionDataItem {
  title: string;
  text: string;
}

const sectionData: SectionDataItem[] = [
  {
    title: "Service One",
    text: "Detailed description of service one, highlighting its benefits and features.",
  },
  {
    title: "Service Two",
    text: "Comprehensive overview of service two, designed to meet your specific needs.",
  },
  {
    title: "Service Three",
    text: "Explanation of service three, and how it can help you achieve your goals.",
  },
  {
    title: "Feature Alpha",
    text: "Discover feature alpha, a cutting-edge solution for modern challenges.",
  },
  {
    title: "Feature Beta",
    text: "Learn about feature beta, offering reliability and performance.",
  },
  {
    title: "Feature Gamma",
    text: "Explore feature gamma, known for its versatility and ease of use.",
  },
];

export default function InfoBlockWithButton() {
  return (
    <StyledInfoBlock>
      <Container maxWidth="lg">
        <Title variant="h2">Our Core Services & Features</Title>
        <InfoGrid>
          {sectionData.map((item, index) => (
            <SectionCard key={index}>
              <SectionTitle variant="h3">{item.title}</SectionTitle>
              <SectionText>{item.text}</SectionText>
            </SectionCard>
          ))}
        </InfoGrid>
        <Link href="/contact">
          <ContactButton variant="contained" color="primary">
            Contact Us
          </ContactButton>
        </Link>
      </Container>
    </StyledInfoBlock>
  );
}
