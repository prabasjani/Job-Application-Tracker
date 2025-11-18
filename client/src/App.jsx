import React from "react";
import { Routes, Route } from "react-router-dom";
import Protected from "./Components/Protected";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Missing from "./Pages/Missing";
import Applies from "./Pages/Applies";
import EachApply from "./Pages/EachApply";
import NewApply from "./Pages/NewApply";
import Auth from "./Pages/Auth";
import AppContextProvider from "./Context/AppContext";
import FollowUp from "./Pages/FollowUp";
import { Toaster } from "sonner";
import TermsConditions from "./Pages/TermsConditions";

const App = () => {
  return (
    <div>
      <AppContextProvider>
        <Toaster position="top-right" richColors />
        <Navbar />
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route element={<Protected />}>
            <Route path="/" element={<Home />} />
            <Route path="/applies" element={<Applies />} />
            <Route path="/new-apply" element={<NewApply />} />
            <Route path="/follow-ups" element={<FollowUp />} />
            <Route path="/applied/:id" element={<EachApply />} />
            <Route path="/terms&conditions" element={<TermsConditions />} />
            <Route path="*" element={<Missing />} />
          </Route>
        </Routes>
        <Footer />
      </AppContextProvider>
    </div>
  );
};

export default App;
