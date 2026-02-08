import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { StrictMode } from "react";
import "./styles/globals.css";
import App from "./App.tsx";
import { ThemeProvider } from "./components/theme-provider.tsx";
import { TooltipProvider } from "./components/ui/tooltip.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StrictMode>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <TooltipProvider>
          <App />
        </TooltipProvider>
      </ThemeProvider>
    </StrictMode>
  </BrowserRouter>,
);
