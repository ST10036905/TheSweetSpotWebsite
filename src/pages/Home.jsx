import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Occasions from "../components/Occasions";
import HowItWorks from "../components/HowItWorks";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <main>
        <Hero />
        <About/>
        <Occasions />
        <HowItWorks />
      </main>

    </>
  );
}

export default Home;