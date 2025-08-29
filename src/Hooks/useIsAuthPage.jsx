import React from "react";
import { useLocation, useParams } from "react-router-dom";

export default function useIsAuthPage() {
  const location = useLocation();

  const authLocation = ["/sign-in", "/sign-up", "/verification-code", "/create-account", "/profile"];

  const isInvestmentPage =
    location.pathname.startsWith("/investment-page/") || location.pathname.startsWith("/invest-now-page/");
  return authLocation.includes(location.pathname) || isInvestmentPage;
}
