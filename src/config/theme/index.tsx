import React, { ReactNode } from 'react';
import { ThemeProvider } from 'theme-ui';

const theme = {
  fonts: {
    body: 'system-ui, sans-serif',
    heading: '"Avenir Next", sans-serif',
    monospace: 'Menlo, monospace',
  },
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#33e',
  },
};

type Props = {
  children: ReactNode;
};

const Provider: React.FC<Props> = ({ children }: Props) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Provider;
