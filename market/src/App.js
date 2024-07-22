import { Routes, Route } from "react-router-dom";
import "./App.css";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchData } from "./redux/cartslice";
// import { addItem, removeItem } from "./redux/cartslice";

import Navbar from "./components/Navbar";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Shop />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
