import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import MainPage from "./components/layout/MainPage";
import Index from "./pages/Projects/Index";
import ScrollToTop from "./components/layout/ScrollToTop";
import Show from "./pages/Projects/Show";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/projects" element={<Index />} />
          <Route path="/projects/:slug" element={<Show />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
