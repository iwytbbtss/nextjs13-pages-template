import { Shadows, ThemeOptions, createTheme } from '@mui/material';

// reference: https://mui.com/material-ui/customization/theming

// for disable shadows
const defaultTheme = createTheme();
const defaultShadows: ThemeOptions['shadows'] = [...defaultTheme.shadows];

const muiTheme = createTheme({
  spacing: 4,
  transitions: {
    create: () => 'none',
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
        disableTouchRipple: true,
      },
    },
  },
  // disable shadows
  shadows: defaultShadows.map(() => 'none') as Shadows,
});

export default muiTheme;
