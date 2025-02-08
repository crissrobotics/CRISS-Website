import React, { lazy, Suspense, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4";

const Team = lazy(() => import("./components/Team/Team"));
import Home from "./components/Home/Home";
const Alumni = lazy(() => import("./components/Alumni/Alumni"));
const Sponsorship = lazy(() => import("./components/sponsorship/Sponsorship"));
const Competitions = lazy(() => import("./components/competitions/Competitions"));
import Loader from "./components/Loader/Loader";
const Developer = lazy(() => import("./components/Developer/Developer"));
// const IRCPage = lazy(() => import("./components/IRCPage/IRCPage"));  
const Events = lazy(() => import("./components/Events/Events"));

ReactGA.initialize("G-N42MZLRJ3F");

function App() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
      const timer = setTimeout(() => {
          setShowLoader(false);
      }, 1500);

      return () => clearTimeout(timer);
  }, []);

  return (
      <>
          {showLoader ? (
              <Loader />
          ) : (
              <Suspense fallback={<Loader />}>
                  <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/sponsorship" element={<Sponsorship />} />
                      <Route path="/competitions" element={<Competitions />} />
                      <Route path="/team" element={<Team />} />
                      <Route path="/alumni" element={<Alumni />} />
                      <Route path="/developers" element={<Developer />} />
                      {/* <Route path="/irc" element={<IRCPage />} /> */}
                      <Route path="/events" element={<Events />} />
                  </Routes>
              </Suspense>
          )}
      </>
  );
}

export default App;
