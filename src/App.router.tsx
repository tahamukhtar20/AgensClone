import { Route, Routes } from "react-router-dom";
import { Home } from "./Routes/Home.tsx";
import { Login } from "./Routes/Login.tsx";
import { Register } from "./Routes/Register.tsx";

const AppRouter: React.FC = () => (
  <>
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </>
);

export default AppRouter;
