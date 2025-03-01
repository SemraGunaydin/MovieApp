import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; // Ensure this file also exists
import App from "./App.jsx"; // Ensure this path matches the file name exactly
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from 'react-toastify';

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <App />
    <ToastContainer />
  </QueryClientProvider>
);