import { Container } from "@mui/material";
import styled from "styled-components";

const FOOTER_HEIGHT = "80px";

const StyledFooter = styled.footer`
  background-color: ${(props) => props.theme.palette.background.paper};
  padding: 0;
  width: 100%;
  position: sticky;
  bottom: 0;
  z-index: 1000;
  border-top: 1px solid ${(props) => props.theme.palette.divider};
  height: ${FOOTER_HEIGHT};
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FooterText = styled.p`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${(props) => props.theme.palette.text.primary};
  margin: 0;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <Container maxWidth="lg" sx={{ textAlign: "center" }}>
        <FooterText>Your Company 2024</FooterText>
      </Container>
    </StyledFooter>
  );
}
