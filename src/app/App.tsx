import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { FeaturedCandles } from "./components/FeaturedCandles";
import { Categories } from "./components/Categories";
import { About } from "./components/About";
import { Testimonials } from "./components/Testimonials";
import { Newsletter } from "./components/Newsletter";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <FeaturedCandles />
        <Categories />
        <About />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
