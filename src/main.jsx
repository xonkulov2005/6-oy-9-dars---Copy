import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { GlobalContextProvider } from "./context/GlobalContext.jsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <GlobalContextProvider>
    <App />
    <Toaster />
  </GlobalContextProvider>
);
