import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Contact from "./components/Contact/Contact";
import Food from "./components/Food/Food";
import NotFound from "./components/NotFound/NotFound";
import FoodDetail from "./components/FoodDetail/FoodDetail";
import DhakaAddress from "./components/Contact/DhakaAddress";
import ComillaAddress from "./components/Contact/ComillaAddress";

function App() {
  return (
    <div className="App p-5">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/food" element={<Food />} />
        <Route path="/food/:detailId" element={<FoodDetail></FoodDetail>} />
        <Route path="/contact-us" element={<Contact />}>
          <Route path="dhakaAddress" element={<DhakaAddress />} />
          <Route path="comillaAddress" element={<ComillaAddress />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
