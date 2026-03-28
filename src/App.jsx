import { Routes, Route } from "react-router-dom";
import DesignK from "./designs/DesignK.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<DesignK />} />
    </Routes>
  );
}
