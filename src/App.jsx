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
import Home from "./pages/Main/Home";
import Home1 from "./pages/Subpages/Home1";
import About from "./pages/Subpages/About";
import Contact from "./pages/Subpages/Contact";
import Services from "./pages/Subpages/Services";
import Login from "./pages/Subpages/Login";
import Signup from "./pages/Subpages/Signup";
import Catalog from "./pages/Subpages/Catalog";
import Profile from "./pages/Subpages/Profile";

import Dashboard from "./pages/Subpages/Dashboard";
import Analytics from "./pages/Subpages/Analytics";
import Security from "./pages/Subpages/SecurityPage";
import Comparison from "./pages/Subpages/comparison";

import Notifications from "./pages/Subpages/Notifications";
import Messages from "./pages/Subpages/Messages";
import Settings from "./pages/Subpages/Settings";
import Support from "./pages/Subpages/Support";

import About1 from "./pages/SubPages/About1";
import Services1 from "./pages/SubPages/Services1";
import Contact1 from "./pages/SubPages/Contact1";
import Help from "./pages/SubPages/Help";

import Search from "./pages/Subpages/Search";
import ComparisonTable from "./pages/Subpages/ComparisonTable";
import Forms from "./pages/Subpages/Forms";
import DataTable from "./pages/Subpages/DataTable";
import Infographics from "./pages/Subpages/Infographics";
import Audio from "./pages/Subpages/Audio";
import Video from "./pages/Subpages/Video";
import Animation from "./pages/Subpages/Animation";
import DragDrop from "./pages/Subpages/DragDrop";
import Editor from "./pages/Subpages/Editor";
import ShoppingCart from "./pages/Subpages/ShoppingCart";
import Calendar from "./pages/Subpages/Calendar";


const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <ThemeToggle />
        <ScrollToTopButton />
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home1" element={<Home1/>}/>
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
            <Route path="/comparison" element={<Comparison />} />
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


