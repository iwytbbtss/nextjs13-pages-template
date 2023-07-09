import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { CssBaseline, ThemeProvider as MuiProvider } from '@mui/material';
import muiTheme from '@/styles/mui/mui-theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MuiProvider theme={muiTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </MuiProvider>
  );
}
