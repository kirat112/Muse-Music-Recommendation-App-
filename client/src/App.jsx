import {
  Dashboard,
  Footer,
  GenrePage,
  Navbar,
  SingerPage,
  MoodPage,
  Login,
  ProtectedRoute,
  PlaylistPage,
} from "./index.js";
import { Routes, Route } from "react-router";
import "./App.css";
// import { useEffect } from "react";
import { LOCALURI, DEPLOYEDURI } from "./Constants.js";

function App() {
  // useEffect(() => {
  //   fetch(`${LOCALURI}/songs`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: localStorage.getItem("token"),
  //     },
  //     body: JSON.stringify({
  //       Singer: "Arijit Singh",
  //     }),
  //   })
  //     .then((res) => res.json())
  // }, []);

  return (
    <div className="font-sans bg-white flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 items-center justify-self-center">
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
          <Route
            path="playlist"
            element={
              <ProtectedRoute>
                <PlaylistPage />
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
