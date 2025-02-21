import { Footer } from "./components/home/Footer";
import { MainContent } from "./components/home/MainContent";
import { Navigation } from "./components/home/Navigation";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Navigation />
      <MainContent />
      <Footer />
    </div>
  );
}
