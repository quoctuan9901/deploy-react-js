import { Routes,Route } from "react-router-dom";
import Cart from "./components/Cart";
import Product from "./components/Product";

const App = () => {

  return (
    <Routes>
      <Route index element={<Product />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
    </Routes>
  );
};

export default App;
