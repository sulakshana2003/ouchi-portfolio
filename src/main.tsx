import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import LenisProvider from "./components/provider/LenisProvider.tsx";
import BlackBackgroundWrapper from "./components/BlackBackgroundWrapper.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LenisProvider>
      
        <BlackBackgroundWrapper>
          <App />
        </BlackBackgroundWrapper>
      
    </LenisProvider>
  </StrictMode>
);
