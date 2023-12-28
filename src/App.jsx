import { Routes,Route } from "react-router-dom";
import Cart from "./components/Cart";
import Product from "./components/Product";

const App = () => {

  return (
    <Routes>
      <Route path="/deploy-react-js" index element={<Product />}></Route>
      <Route path="/deploy-react-js/cart" element={<Cart />}></Route>
    </Routes>
  );
};

export default App;
