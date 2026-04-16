import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./layout/Layout";
import { ListingsPage } from "./components/Listings/Listings";
import { ListingSingular } from "./components/Listings/ListingSingular";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/listings" element={<ListingsPage />} />
        <Route path="/listing/:slug" element={<ListingSingular />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
