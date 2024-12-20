import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const {
    VITE_SPOTIFY_CLIENT_ID,
    VITE_SPOTIFY_REDIRECT_URI,
    VITE_SPOTIFY_SCOPE,
    VITE_SPOTIFY_AUTH_ENDPOINT,
  } = import.meta.env;

  const authURL = `${VITE_SPOTIFY_AUTH_ENDPOINT}?client_id=${VITE_SPOTIFY_CLIENT_ID}&redirect_uri=${VITE_SPOTIFY_REDIRECT_URI}&response_type=token&scope=${encodeURIComponent(
    VITE_SPOTIFY_SCOPE
  )}`;

  const navigate = useNavigate();

  useEffect(() => {
    try {
      // Extract access token from URL if it exists
      const hash = window.location.hash;
      if (hash) {
        const token = hash.split("&")[0].split("=")[1]; // Extract token
        console.log(token);
        if (token) {
          localStorage.setItem("spotify_access_token", token); // Save token
          window.location.hash = ""; // Clear the hash to keep URL clean
          navigate("/"); // Redirect to home page
          console.log("token is:", token);
        }
      }
    } catch (error) {
      console.log("Error in Login.jsx:", error);
    }
  }, [navigate]);
  return (
    <div className="flex items-center justify-center bg-white min-h-min">
      <a
        href={authURL}
        className="flex justify-center items-center px-8 py-4 w-fit bg-buttonBgGreen text-buttonTextColor rounded-md hover:bg-opacity-90"
      >
        Login With Spotify
      </a>
    </div>
  );
};

export default Login;
