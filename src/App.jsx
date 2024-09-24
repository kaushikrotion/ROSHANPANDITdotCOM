import "./app.scss"
import Hero from "./components/Hero/Hero.jsx";
import Navbar from "./components/navbar/Navbar.jsx"
import PortfolioHighlights from "./components/portfoliohighlights/PortfolioHighlights.jsx";
import RecentProjects from "./components/recentprojects/RecentProjects.jsx";

const App = () => {
  return <div>
    <section>
      <Navbar />
      <Hero />
    </section>
    <section>
      <PortfolioHighlights/>
    </section>
    <section>
      <RecentProjects />
    </section>
    <section>Projects</section>
    <section>Parallax</section>
    <section>Portfolio Highlights</section>
    <section>Contact Me</section>
    {/* <Test />
    <Test /> */}
  </div>;
};

export default App;
