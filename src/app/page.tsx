import Navbar from "@/components/Navbar";
import ManglikCalculator from "@/components/ManglikCalculator";
import ManglikInfo from "@/components/ManglikInfo";
import Features from "@/components/Features";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <ManglikCalculator />
      <ManglikInfo />
      <Features />
      <FAQ />
      <Footer />
    </>
  );
};

export default Home;
