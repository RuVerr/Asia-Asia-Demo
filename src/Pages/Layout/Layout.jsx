import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import HomeHead from "../../Components/Header/HomeHead/Header.jsx";
import NavigationMenu from "../../Components/Navigation/NavigationMenu/NavigationMenu.jsx";
import NavBar from "../../Components/Navigation/NavBar/NavBar.jsx";
import Footer from "../../Components/Footer/Footer/Footer.jsx";
import AboutUsHead from "../../Components/Header/AboutUsHead/VideoHead.jsx";
import InvestHead from "../../Components/Header/InvestHead/InvestHead.jsx";
import OurJourney from "../../Components/Header/OurJourneyHead/OurJourney.jsx";
import OurTeam from "../../Components/Header/OurTeamHead/OurTeamHead.jsx";

import useScreenResize from "../../Hooks/useScreenResize";
import { useSelector } from "react-redux";
import useIsAuthPage from "../../Hooks/useIsAuthPage.jsx";

const Layout = ({ content }) => {
  const isAuthPage = useIsAuthPage();
  const location = useLocation();

  useScreenResize();
  const isMobile = useSelector((state) => state.screen.isMobile);

  const headers = {
    "/": <HomeHead />,
    "/invest": <InvestHead />,
    "/about": <AboutUsHead />,
    "/team": <OurTeam />,
    "/journey": <OurJourney />
  };

  const currentHeader = !isAuthPage ? headers[location.pathname] || null : null;

  return (
    <div>
      <NavigationMenu />
      {currentHeader}
      {isMobile && !isAuthPage ? <NavBar /> : isMobile && !isAuthPage}

      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
