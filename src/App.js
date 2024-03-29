import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React, { useContext, useEffect } from "react";
import {AppContext} from "./providers/context";
import { css } from "styled-components/macro"; //eslint-disable-line
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { I18nProvider } from "./i18n";

/*
 * This is the entry point component of this project. You can change the below exported default App component to any of
 * the prebuilt landing page components by uncommenting their import and export lines respectively.
 * See one of the landing page components to better understand how to import and render different components (Always
 * make sure if you are building your own page, the root component should be the AnimationRevealPage component. You can
 * disable the animation by using the disabled prop.
 *
 * The App component below is using React router to render the landing page that you see on the live demo website
 * and the component previews.
 *
 */


/* Ready Made Pages (from demos folder) */
// import EventLandingPage from "demos/EventLandingPage.js";
// import HotelTravelLandingPage from "demos/HotelTravelLandingPage.js";
import AgencyLandingPage from "demos/AgencyLandingPage.js";
// import SaaSProductLandingPage from "demos/SaaSProductLandingPage.js";
// import RestaurantLandingPage from "demos/RestaurantLandingPage.js";
// import ServiceLandingPage from "demos/ServiceLandingPage.js";
// import HostingCloudLandingPage from "demos/HostingCloudLandingPage.js";

/* Inner Pages */
import LoginPage from "pages/Login.js";
import SignupPage from "pages/Signup.js";
// import PricingPage from "pages/Pricing.js";
import AboutUsPage from "pages/AboutUs.js";
import ContactUsPage from "pages/ContactUs.js";
// import BlogIndexPage from "pages/BlogIndex.js";
import TermsOfServicePage from "pages/TermsOfService.js";
import PrivacyPolicyPage from "pages/PrivacyPolicy.js";

//import ComponentRenderer from "ComponentRenderer.js";
//import MainLandingPage from "MainLandingPage.js";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  // return <AnimationRevealPage disabled></AnimationRevealPage>;
  const {dispatch} = useContext(AppContext);
  const { state } = useContext(AppContext);

  const catchE = (e) => {
    console.log('👍', 'beforeinstallprompt', e);

    // Prevent the mini-infobar from appearing on mobile
    e.preventDefault();
    // Stash the event so it can be triggered later.
    const deferredPrompt = e;
    dispatch({type: 'setDeferredPrompt', deferredPrompt});
  }

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', catchE)
    console.log(state.deferredPrompt);
    // cleanup this component
    return () => {
      window.removeEventListener('beforeinstallprompt', catchE);
    };

  }, []);

  console.log(state.deferredPrompt);

  return (
    <I18nProvider locale={state.siteLang}>
      <Router>
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/sign-up">
            <SignupPage />
          </Route>
          <Route path="/about-us">
            <AboutUsPage />
          </Route>
          <Route path="/terms">
            <TermsOfServicePage />
          </Route>
          <Route path="/privacy">
            <PrivacyPolicyPage />
          </Route>
          <Route path="/contact">
            <ContactUsPage />
          </Route>
          <Route exact path="/">
            <AgencyLandingPage />
          </Route>
        </Switch>
      </Router>
      <ToastContainer />
    </I18nProvider>
  );
}

// export default EventLandingPage;
// export default HotelTravelLandingPage;
// export default AgencyLandingPage;
// export default SaaSProductLandingPage;
// export default RestaurantLandingPage;
// export default ServiceLandingPage;
// export default HostingCloudLandingPage;

// export default LoginPage;
// export default SignupPage;
// export default PricingPage;
// export default AboutUsPage;
// export default ContactUsPage;
// export default BlogIndexPage;
// export default TermsOfServicePage;
// export default PrivacyPolicyPage;

// export default MainLandingPage;