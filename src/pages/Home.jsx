import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Occasions from "../components/Occasions";
import HowItWorks from "../components/HowItWorks";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Occasions />
        <HowItWorks />
      </main>

      <Footer />
    </>
  );
}

export default Home;