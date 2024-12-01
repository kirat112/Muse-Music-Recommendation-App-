// import { Router } from "react-router-dom";
import { Discover, CardContainer, Footer } from "../../index.js";

const Dashboard = () => {
  return (
    // <Router>
      <div className="px-40 py-5">
        <Discover />
        <CardContainer />
        <Footer />
      </div>
    // {/* </Router> */}
  );
};

export default Dashboard;
