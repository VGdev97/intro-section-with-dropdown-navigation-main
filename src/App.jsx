import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <main className="bg-[#fafafa] h-screen overflow-hidden">
      <div className="container mx-auto px-5">
        {/* Header */}
        <Navbar />
        {/* Hero */}
        <Hero />
      </div>
    </main>
  );
}

export default App;
