import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// ✅ Context and Utility Components
import { ThemeProvider } from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import ScrollToTopButton from "./components/ScrollToTopButton";

// ✅ Layout
import MainLayout from "./layout/MainLayout";

// ✅ Core Pages
import Home from "./pages/Main/Home.jsx";
import Home1 from "./pages/Subpages/Home1.jsx";
import About from "./pages/Subpages/About.jsx";
import Contact from "./pages/Subpages/Contact.jsx";
import Services from "./pages/Subpages/Services.jsx";
import Login from "./pages/Subpages/Login.jsx";
import Signup from "./pages/Subpages/Signup.jsx";
import Catalog from "./pages/Subpages/Catalog.jsx";
import Profile from "./pages/Subpages/Profile.jsx";

import Dashboard from "./pages/Subpages/Dashboard.jsx";
import Analytics from "./pages/Subpages/Analytics.jsx";
import Security from "./pages/Subpages/SecurityPage.jsx";
import Comparison from "./pages/Subpages/comparison.jsx";

import Notifications from "./pages/Subpages/Notifications.jsx";
import Messages from "./pages/Subpages/Messages.jsx";
import Settings from "./pages/Subpages/Settings.jsx";
import Support from "./pages/Subpages/Support.jsx";

// ✅ IMPORTANT: Fix casing here (Subpages, not SubPages)
import About1 from "./pages/Subpages/About1.jsx";
import Services1 from "./pages/Subpages/Services1.jsx";
import Contact1 from "./pages/Subpages/Contact1.jsx";
import Help from "./pages/Subpages/Help.jsx";

import Search from "./pages/Subpages/Search.jsx";
import ComparisonTable from "./pages/Subpages/ComparisonTable.jsx";
import Forms from "./pages/Subpages/Forms.jsx";
import DataTable from "./pages/Subpages/DataTable.jsx";
import Infographics from "./pages/Subpages/Infographics.jsx";
import Audio from "./pages/Subpages/Audio.jsx";
import Video from "./pages/Subpages/Video.jsx";
import Animation from "./pages/Subpages/Animation.jsx";
import DragDrop from "./pages/Subpages/DragDrop.jsx";
import Editor from "./pages/Subpages/Editor.jsx";
import ShoppingCart from "./pages/Subpages/ShoppingCart.jsx";
import Calendar from "./pages/Subpages/Calendar.jsx";

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <ThemeToggle />
        <ScrollToTopButton />
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home1" element={<Home1 />} />

            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />

            <Route path="/catalog" element={<Catalog />} />
            <Route path="/profile" element={<Profile />} />

            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/security" element={<Security />} />
            <Route path="/comparison" element={<Comparison />} />

            <Route path="/about1" element={<About1 />} />
            <Route path="/contact1" element={<Contact1 />} />
            <Route path="/help" element={<Help />} />
            <Route path="/services1" element={<Services1 />} />

            <Route path="/notifications" element={<Notifications />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/support" element={<Support />} />

            <Route path="/search" element={<Search />} />
            <Route path="/comparisontable" element={<ComparisonTable />} />
            <Route path="/forms" element={<Forms />} />
            <Route path="/datatable" element={<DataTable />} />
            <Route path="/infographics" element={<Infographics />} />
            <Route path="/audio" element={<Audio />} />
            <Route path="/video" element={<Video />} />
            <Route path="/animation" element={<Animation />} />
            <Route path="/dragdrop" element={<DragDrop />} />
            <Route path="/editor" element={<Editor />} />
            <Route path="/shoppingcart" element={<ShoppingCart />} />
            <Route path="/calendar" element={<Calendar />} />
          </Routes>
        </MainLayout>
      </Router>
    </ThemeProvider>
  );
};

export default App;
