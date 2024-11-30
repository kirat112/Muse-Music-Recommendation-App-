import { Footer, Navbar, CardContainer, Discover } from "./index.js";
import "./App.css";

function App() {
  return (
    <div className="font-sans bg-white">
      <Navbar />
      <div className="px-40 py-5">
        <Discover />
        <CardContainer />
        <Footer />
      </div>
    </div>
  );
}

export default App;
