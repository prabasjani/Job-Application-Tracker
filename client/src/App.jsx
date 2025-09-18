import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import NewApply from "./Pages/NewApply";
import AllApplies from "./Pages/AllApplies";
import EachApplication from "./Pages/EachApplication";
import Missing from "./Pages/Missing";

import { Toaster } from "sonner";
import AppContextProvider from "./Context/AppContext";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="">
      <AppContextProvider>
        <Toaster richColors position="top-right" />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-apply" element={<NewApply />} />
          <Route path="/all-applies" element={<AllApplies />} />
          <Route path="/application/:id" element={<EachApplication />} />
          <Route path="*" element={<Missing />} />
        </Routes>
        <Footer />
      </AppContextProvider>
    </div>
  );
};

export default App;
