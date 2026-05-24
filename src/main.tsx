import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { initGA } from "./components/analytics.ts";
import App from './App.tsx';
import { ThemeContextProvider } from './theme/ThemeProvider.tsx';

initGA()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </StrictMode>,
)
