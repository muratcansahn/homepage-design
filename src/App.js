import "./App.css";
import {
  HeroSection,
  Navbar,
  FeaturedSection,
  AboutUs,
  ChooseCategory,
  WhyWeStarted,
  ListofAuthors,
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
      <ListofAuthors />
    </>
  );
}

export default App;
