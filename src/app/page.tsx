import Navbar from "@/components/Navbar";
import ManglikFlow from "@/components/ManglikFlow";
import ManglikInfo from "@/components/ManglikInfo";
import Features from "@/components/Features";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <ManglikFlow />
      <ManglikInfo />
      <Features />
      <FAQ />
      <Footer />
    </>
  );
};

export default Home;
