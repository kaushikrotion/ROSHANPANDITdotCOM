import "./app.scss"
import BlogUpdates from "./components/blogupdates/blogupdates.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Navbar from "./components/navbar/Navbar.jsx"
import PortfolioHighlights from "./components/portfoliohighlights/PortfolioHighlights.jsx";


const App = () => {
  return <div>
    <section>
      <Navbar />
      <Hero />
    </section>
    <section>
      <PortfolioHighlights/>
      <BlogUpdates />
    </section>
    <section>
      
    </section>

    {/* <Test />
    <Test /> */}
  </div>;
};

export default App;
