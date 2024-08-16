import React, { lazy, Suspense, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

const Team = lazy(() => import("./components/Team/Team"));
import Home from "./components/Home/Home";
const Alumni = lazy(() => import("./components/Alumni/Alumni"));
const Sponsorship = lazy(() => import("./components/sponsorship/Sponsorship"));
const Competitions = lazy(() => import("./components/competitions/Competitions"));
import Loader from "./components/Loader/Loader";



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
                  </Routes>
              </Suspense>
          )}
      </>
  );
}

export default App;
