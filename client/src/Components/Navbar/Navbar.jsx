import { useNavigate } from "react-router-dom";
import { Button, HomeIcon, Logo, Search } from "../../index.js";
import { useEffect, useState } from "react";
import axios from "axios";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [hovered, setHovered] = useState(false);

  const navigate = useNavigate();
  const links = [
    { name: "For You", path: "/" },
    { name: "Playlists", path: "/playlistNavbar" },
    { name: "Artists", path: "/artists" },
    { name: "Albums", path: "/albums" },
    { name: "Podcasts", path: "/podcasts" },
    { name: "Genres", path: "/genres" },
  ];

  useEffect(() => {
    const token = localStorage.getItem("spotify_access_token");

    if (token) {
      axios
        .get("https://api.spotify.com/v1/me", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setUser(response.data);
        })
        .catch((error) => {
          console.error("Error fetching user profile:", error);
          localStorage.removeItem("spotify_access_token");
          window.location.href = "/";
        });
    } else {
      window.location.href = "/login";
    }
  }, []);
  return (
    <div className="flex justify-between items-center w-full px-10 py-3">
      {/* left side */}
      <div className="cursor-pointer" onClick={() => navigate("/")}>
        <Logo />
      </div>

      {/* right side */}
      {localStorage.getItem("spotify_access_token") && (
        <div className="flex gap-8 items-center">
          {/* links */}
          <div>
            <ul className="flex gap-9">
              {links.map((link, index) => (
                <li key={index}>
                  <a href={link.path}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          {/* buttons */}
          <div className="flex gap-2">
            <Button Children={<Search />} />
            <div className="cursor-pointer" onClick={() => navigate("/")}>
              <Button Children={<HomeIcon />} />
            </div>
          </div>
          {/* profile */}
          <div
            className="relative"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {user && (
              <img
                src={user?.images[0]?.url}
                alt="profile"
                className="w-10 h-10 rounded-full cursor-pointer"
              />
            )}
            {hovered && (
              <span className="absolute top-12 right-0 shadow-md p-2 rounded-md">
                {user?.display_name}
              </span>
            ) 
            }
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
