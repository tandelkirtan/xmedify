import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Hospital } from "./pages/Hospital";
import { HeadderTop } from "./components/Common/HeadderTop";
import { NavBarMenue } from "./components/Common/Navbar";
import { MyBookings } from "./pages/MyBookings";
import { MedifyProvider } from "./context/Context";

function App() {
  return (
    <MedifyProvider>
      <BrowserRouter>
        <HeadderTop />
        <NavBarMenue />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hospitals" element={<Hospital />} />
          <Route path="/my-bookings" element={<MyBookings />} />
        </Routes>
      </BrowserRouter>
    </MedifyProvider>
  );
}

export default App;
