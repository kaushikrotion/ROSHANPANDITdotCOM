import "./app.scss"
import BlogUpdates from "./components/blogupdates/blogupdates.jsx";
import Footer from "./components/footer/footer.jsx";
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
    <footer>
      <Footer/>
    </footer>

    {/* <Test />
    <Test /> */}
  </div>;
};

export default App;
