import '@/styles/globals.css';
import GlobalStyle from '@/styles/styled-components/global-styles';
import styledTheme from '@/styles/styled-components/styled-theme';
import type { AppProps } from 'next/app';
import { ThemeProvider as StyledProvider } from 'styled-components';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StyledProvider theme={styledTheme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </StyledProvider>
  );
}
