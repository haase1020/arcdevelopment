import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import Header from '../components/ui/Header';

const app = () => {
  return (
    <ThemeProvider>
      <Header />
      hello world!
    </ThemeProvider>
  );
};

export default app;
