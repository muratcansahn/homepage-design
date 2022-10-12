import "./App.css";
import {
  HeroSection,
  Navbar,
  FeaturedSection,
  AboutUs,
  ChooseCategory,
  WhyWeStarted,
} from "./components";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturedSection />
      <AboutUs />
      <ChooseCategory />
      <WhyWeStarted />
    </>
  );
}

export default App;
