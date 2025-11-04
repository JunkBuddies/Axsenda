import { HashRouter, Routes, Route } from "react-router-dom";
import AxsendaLanding from "./pages/AxsendaLanding.jsx";
import Academy from "./pages/Academy.jsx";
import Labs from "./pages/Labs.jsx";
import Society from "./pages/Society.jsx";
import Press from "./pages/Press.jsx";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<AxsendaLanding />} />
        <Route path="/academy" element={<Academy />} />
        <Route path="/labs" element={<Labs />} />
        <Route path="/society" element={<Society />} />
        <Route path="/press" element={<Press />} />
      </Routes>
    </HashRouter>
  );
}
