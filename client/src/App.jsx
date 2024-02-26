import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { LoginSuccess } from "./components/Special/LoginSuccess";
import KeepLogin from "./context/state/KeepLogin";
import ProtectedRoutes from "./context/state/ProtectedRoutes";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<KeepLogin/>}>
          <Route path="/" element={<Home />} />
          <Route path="/sigin" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<ProtectedRoutes/>}>
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<Products />} />
          </Route>
          <Route path="/login/success" element={<LoginSuccess />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
