"use client";

import { Container, Typography, Box, BoxProps, Button } from "@mui/material";
import styled from "styled-components";
import Link from "next/link";

const StyledCallToActionBlock = styled(Box)<BoxProps>`
  padding: 4rem 0;
  text-align: center;
  background-color: ${(props) =>
    props.theme.palette.mode === "light"
      ? props.theme.palette.grey[100]
      : props.theme.palette.background.paper};
  margin: 2rem 0;
`;

const CallToActionBlock: React.FC = () => {
  return (
    <StyledCallToActionBlock>
      <Container maxWidth="md">
        {" "}
        <Typography
          component="h2"
          sx={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            marginBottom: "1.5rem",
            color: (theme) => theme.palette.text.primary,
          }}
        >
          Ready to Get Started?
        </Typography>
        <Link href="/contact">
          <Button variant="contained" color="success" size="large">
            Contact Us Now
          </Button>
        </Link>
      </Container>
    </StyledCallToActionBlock>
  );
};

export default CallToActionBlock;
