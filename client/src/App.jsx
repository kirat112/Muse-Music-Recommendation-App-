import {
  Dashboard,
  Footer,
  GenrePage,
  Navbar,
  SingerPage,
  MoodPage,
  Login,
  ProtectedRoute,
} from "./index.js";
import { Routes, Route } from "react-router";
import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("https://l3ncll7v-5000.inc1.devtunnels.ms/songs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        Singer: "Arijit Singh",
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className="font-sans bg-white">
      <Navbar />
      <div className="min-h-[calc(100dvh_-_277px)]">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <>
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              </>
            }
          />
          <Route
            path="singer"
            element={
              <ProtectedRoute>
                <SingerPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="mood"
            element={
              <ProtectedRoute>
                <MoodPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="genre"
            element={
              <ProtectedRoute>
                <GenrePage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
