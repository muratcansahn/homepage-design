import "./App.css";
import {
  HeroSection,
  Navbar,
  FeaturedSection,
  AboutUs,
  ChooseCategory,
} from "./components";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturedSection />
      <AboutUs />
      <ChooseCategory />
    </>
  );
}

export default App;
