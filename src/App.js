import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Concept from "./pages/Concept";
import Subscription from "./pages/Subscription";
import Reservation from "./pages/Reservation";
import Infos from "./pages/Infos";
import Booking from "./pages/Booking";
import Proceed from "./pages/Proceed";
import { UserProvider } from "./data/UserContext";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/studio" element={<Concept />} />
            <Route path="/infos" element={<Infos />} />
            <Route path="/reservations" element={<Reservation />} />
            <Route path="/book/:id" element={<Booking />} />
            <Route path="/proceed/:id" element={<Proceed />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}

export default App;
