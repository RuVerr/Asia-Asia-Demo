import App from "./App.jsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { store } from "./Store/store.js";
import { Provider } from "react-redux";

// import "modern-css-reset";
import "./index.scss";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/Asia-Asia-Demo/">
        <ScrollToTop />
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
