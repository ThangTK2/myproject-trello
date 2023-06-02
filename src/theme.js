import { experimental_extendTheme as extendTheme } from '@mui/material/styles';
import { cyan, deepOrange, orange, pink, teal } from '@mui/material/colors';

// Create a theme instance.
const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: pink
      }
    },
    dark: {
      palette: {
        primary: cyan
      }
    }
  }
  // ...other properties
});

export default theme;