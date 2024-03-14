import React from "react";
import ReactDOM from "react-dom/client";
import AppProvider from "./AppProvider.jsx";
import { GlobalStyles } from "./styles/GlobalStyles.js";
import { AntdStyles } from "./styles/AntdStyles.js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";

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
    <AntdStyles />
    <GlobalStyles />
    <AppProvider />
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <AppProvider />
    </QueryClientProvider>
    <ToastContainer
      position="bottom-right"
      autoClose={2000}
      limit={1}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover={false}
      theme="dark"
    />
  </React.StrictMode>
);
