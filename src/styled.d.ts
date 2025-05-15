import "styled-components";
import { Theme as MuiTheme } from "@mui/material/styles";

// Augment the DefaultTheme interface from styled-components
// to include the MuiTheme type.
// This makes MuiTheme properties available on props.theme in styled-components.
declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends MuiTheme {}
}
