import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Menu from "./pages/Menu";
import Order from "./pages/Order";
import Reservations from "./pages/Reservations";
import Delivery from "./pages/Delivery";
import BusinessDashboard from "./pages/business/Dashboard";
import BusinessOrders from "./pages/business/Orders";
import BusinessAvailability from "./pages/business/Availability";
import BusinessReservations from "./pages/business/Reservations";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Client-facing routes */}
        <Route path="/" element={<Layout><Index /></Layout>} />
        <Route path="/menu" element={<Layout><Menu /></Layout>} />
        <Route path="/order" element={<Layout><Order /></Layout>} />
        <Route path="/reservations" element={<Layout><Reservations /></Layout>} />
        <Route path="/delivery" element={<Layout><Delivery /></Layout>} />
        
        {/* Business dashboard routes */}
        <Route path="/business" element={<BusinessDashboard />} />
        <Route path="/business/orders" element={<BusinessOrders />} />
        <Route path="/business/availability" element={<BusinessAvailability />} />
        <Route path="/business/reservations" element={<BusinessReservations />} />

        {/* IMPORTANT: DO NOT place any routes below this. */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;