import {
  Dashboard,
  Footer,
  GenrePage,
  Navbar,
  SingerPage,
  MoodPage,
} from "./index.js";
import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";

function App() {
  return (
    <div className="font-sans bg-white">
      <Navbar />
      <div className="min-h-[calc(100dvh_-_277px)]">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="singer" element={<SingerPage />} />
            <Route path="mood" element={<MoodPage />} />
            <Route path="genre" element={<GenrePage />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
