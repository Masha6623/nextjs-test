import {
  AppBar,
  AppBarProps,
  Toolbar,
  ToolbarProps,
  Typography,
  TypographyProps,
  Button,
  ButtonProps,
  Box,
  IconButton,
  Container,
} from "@mui/material";
import Link from "next/link";
import styled from "styled-components";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useAppTheme } from "@/app/providers/ThemeProvider";

export const HEADER_HEIGHT = "70px";

const StyledAppBar = styled(AppBar)<AppBarProps>`
  && {
    background-color: ${(props) => props.theme.palette.background.paper};
    height: ${HEADER_HEIGHT};
    box-shadow: ${(props) => props.theme.shadows[1]};
    border-bottom: 1px solid ${(props) => props.theme.palette.divider};
  }
`;

const StyledToolbar = styled(Toolbar)<ToolbarProps>`
  && {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const LogoText = styled(Typography)<TypographyProps>`
  && {
    font-weight: 600;
    color: ${(props) => props.theme.palette.text.primary};
    text-decoration: none;
    &:hover {
      color: ${(props) => props.theme.palette.primary.main};
    }
  }
`;

const NavLinksContainer = styled(Box)`
  display: flex;
  align-items: center;
`;

const NavButton = styled(Button)<ButtonProps>`
  && {
    margin-left: 1rem;
    color: ${(props) => props.theme.palette.text.secondary};
    &:hover {
      color: ${(props) => props.theme.palette.primary.main};
      background-color: ${(props) => props.theme.palette.action.hover};
    }
  }
`;

export default function Header() {
  const { mode, toggleTheme } = useAppTheme();

  return (
    <StyledAppBar position="sticky">
      <Container maxWidth="lg" sx={{ height: "100%" }}>
        <StyledToolbar>
          <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
            <LogoText variant="h6">Your Company</LogoText>
          </Link>
          <NavLinksContainer>
            <Link href="/">
              <NavButton variant="text">Home</NavButton>
            </Link>
            <Link href="/contact">
              <NavButton variant="text">Contact</NavButton>
            </Link>
            <IconButton sx={{ ml: 1 }} onClick={toggleTheme} color="primary">
              {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </NavLinksContainer>
        </StyledToolbar>
      </Container>
    </StyledAppBar>
  );
}
