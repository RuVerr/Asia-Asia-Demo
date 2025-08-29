import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import Layout from "../Pages/Layout/Layout";
import Home from "../Pages/Home/Home";
import Invest from "../Pages/Invest/Invest";
import AboutUs from "../Pages/AboutUs/AboutUs";
import OurTeam from "../Pages/OurTeam/OurTeam";
import OurJourney from "../Pages/OurJourney/OurJourney";

import { useSelector } from "react-redux";
import useScreenResize from "../Hooks/useScreenResize";

import SignIn from "../Pages/authForms/SignIn/SignIn";
import SignUp from "../Pages/authForms/SignUp/SignUp";
import VereficationCode from "../Pages/authForms/VereficationCode/VereficationCode";
import useIsAuthPage from "../Hooks/useIsAuthPage";
import CreateAccount from "../Pages/authForms/CreateAccount/CreateAccount";
import Profile from "../Pages/Profile/Profile";
import InvestPagesOne from "../Pages/InvestPages/InvestPagesOne/InvestPagesOne";
import InvestPagesTwo from "../Pages/InvestPages/InvestPagesTwo/InvestPagesTwo";

const AppRouter = () => {
  const [content, setContent] = useState({});
  const location = useLocation();

  useEffect(() => {
    setContent(location.pathname);
  }, [location]);

  useIsAuthPage();

  useScreenResize();
  const isMobile = useSelector((state) => state.screen.isMobile);

  return (
    <Routes>
      <Route path="/" element={<Layout content={content} />}>
        <Route index element={<Home />} />
        <Route path="invest" element={<Invest />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="team" element={<OurTeam />} />
        <Route path="journey" element={<OurJourney />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="verification-code" element={<VereficationCode />} />
        <Route path="create-account" element={<CreateAccount />} />
        <Route path="profile" element={<Profile />} />
        <Route path="investment-page/:id" element={<InvestPagesOne />} />
        <Route path="invest-now-page/:id" element={<InvestPagesTwo />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
