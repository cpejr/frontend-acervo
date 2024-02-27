import React from "react";
import ReactDOM from "react-dom/client";
import AppProvider from "./AppProvider.jsx";
import { GlobalStyles } from "./styles/GlobalStyles.js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      staleTime: import.meta.env.VITE_STALE_TIME || 300000,
    },
  },
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <AppProvider />
    </QueryClientProvider>
  </React.StrictMode>
);
