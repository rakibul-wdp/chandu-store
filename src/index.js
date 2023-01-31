import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CartProvider } from "./context/cart_context";
import { FilterContextProvider } from "./context/filter_context";
import { AppProvider } from "./context/productcontex";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-qvsq6duv4820hl1e.us.auth0.com"
      clientId="qXYO6RTo3g5UyazkH2tZuxxzoBPUbStL"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <AppProvider>
        <FilterContextProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterContextProvider>
      </AppProvider>
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
