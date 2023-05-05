import Home from "../Screens/Home";
import React from "react";
import {
  BrowserRouter as NavigationProvider,
  Routes,
  Route,
} from "react-router-dom";
import ContactUs from "../Screens/ContactAs";

import Plans from "../Screens/Plans";
import Login from "../Screens/Login";
import Testimonials from "../Screens/Testimonials";
import Header from "../Components/Header";
import Programs from "../Screens/Programs";
import Gallery from "../Screens/Gallery";



function MainNav(params) {
  return (
    <div>
      <NavigationProvider>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/login" element={<Login />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/gallery" element={<Gallery/>} />
        </Routes>
      </NavigationProvider>
    </div>
  );
}
export default MainNav;
