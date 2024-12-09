import { useNavigate } from "react-router-dom";
import { Button, HomeIcon, Logo, Search } from "../../index.js";

const Navbar = () => {
  const navigate = useNavigate();
  const links = [
    { name: "For You", path: "/" },
    { name: "Playlists", path: "/playlists" },
    { name: "Artists", path: "/artists" },
    { name: "Albums", path: "/albums" },
    { name: "Podcasts", path: "/podcasts" },
    { name: "Genres", path: "/genres" },
  ];
  return (
    <div className="flex justify-between items-center w-full px-10 py-3">
      {/* left side */}
      <div className="cursor-pointer" onClick={() => navigate("/")}>
        <Logo />
      </div>

      {/* right side */}
      {localStorage.getItem("token") && (
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
          <div>
            <a href="#">Profile</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
