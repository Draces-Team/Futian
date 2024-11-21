import react from "react";
import { BrowserRouter , Routes , Route , Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import AwaitingShipping from "./pages/AwaitingShipping";
import BannedMaterial from "./pages/BannedMaterial";
import Calculator from "./pages/Calculator";
import Faqs from "./pages/Faqs";
import Features from "./pages/Features";
import HowItWork from "./pages/HowItWork";
import PrivacyAndUsagePolicy from "./pages/PrivacyAndUsagePolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import Shipped from "./pages/Shipped";
import BookAddress from "./pages/BookAddress";
import MyAddress from "./pages/MyAddress";
import Staff from "./pages/Staff";
import StaffDashboard from "./pages/StaffDashboard";
import User from "./pages/User";
import Transactions from "./pages/Transactions";

function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
          }/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/" element={<Home />}/>
        <Route path="/*" element={<NotFound />}/>
        <Route path="/awaiting-shipping" element={<AwaitingShipping />}/>
        <Route path="/banned-material" element={<BannedMaterial />}/>
        <Route path="/calculator" element={<Calculator />}/>
        <Route path="/faqs" element={<Faqs />}/>
        <Route path="/features" element={<Features />}/>
        <Route path="/how-it-work" element={<HowItWork />}/>
        <Route path="/privacy-and-usage-policy" element={<PrivacyAndUsagePolicy />}/>
        <Route path="/terms-and-conditions" element={<TermsAndConditions />}/>
        <Route path="/shipped" element={<Shipped />}/>
        <Route path="/myaddressbook" element={<BookAddress />}/>
        <Route path="/myaddress" element={<MyAddress />}/>
        <Route path="/staff" element={<Staff />}/>
        <Route path="/staff-dashboard" element={<StaffDashboard />}/>
        <Route path="/user" element={<User />}/>
        <Route path="/transactions" element={<Transactions />}/>


      </Routes>
    </BrowserRouter>
  )
}
export default App