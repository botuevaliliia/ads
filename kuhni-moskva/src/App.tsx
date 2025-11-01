import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Project from "./pages/Project";
// import Services from "./pages/Services";
// import About from "./pages/About";
// import Process from "./pages/Process";
// import Reviews from "./pages/Reviews";
// import Blog from "./pages/Blog";
// import Contacts from "./pages/Contacts";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/project/:slug" element={<Project />} />
          {/* <Route path="/services" element={<Services />} /> */}
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/process" element={<Process />} /> */}
          {/* <Route path="/reviews" element={<Reviews />} /> */}
          {/* <Route path="/blog" element={<Blog />} /> */}
          {/* <Route path="/contacts" element={<Contacts />} /> */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
