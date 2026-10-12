import { useState, useEffect } from "react";
import attractions from "./data/attractions";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import FeaturedDestinations from "./components/FeaturedDestinations";
import PopularActivities from "./components/PopularActivities";
import SearchFilter from "./components/SearchFilter";
import AttractionList from "./components/AttractionList";
import AttractionDetails from "./components/AttractionDetails";
import EnquiryForm from "./components/EnquiryForm";
import { getCategories, filterAttractions } from "./js";
import "./attractions.css";
import "./home.css";

const categories = getCategories(attractions);
const featured = attractions.filter((a) => [1, 3, 2].includes(a.id));

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState(null);
  const [enquiryTarget, setEnquiryTarget] = useState(null);

  // Update the browser tab title to match what the visitor is viewing
  useEffect(() => {
    document.title = selected ? `${selected.name} | Visit Lesotho` : "Visit Lesotho";
  }, [selected]);

  const filtered = filterAttractions(attractions, search, category);

  const handleEnquire = (attraction) => {
    // A fresh object each time so the form updates even for the same place
    setEnquiryTarget({ name: attraction.name, time: Date.now() });
    setSelected(null);
    // Wait a moment so the popup is gone before scrolling
    setTimeout(() => {
      document.getElementById("enquiry")?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <FeaturedDestinations destinations={featured} onSelect={setSelected} />
        <PopularActivities />

        <section className="section" id="attractions">
          <h2>All attractions</h2>
          <SearchFilter
            search={search}
            onSearchChange={setSearch}
            category={category}
            onCategoryChange={setCategory}
            categories={categories}
          />
          <p className="result-count">
            Showing {filtered.length} of {attractions.length} attractions
          </p>
          <AttractionList attractions={filtered} onSelect={setSelected} />
        </section>

        <EnquiryForm destinations={attractions} preselected={enquiryTarget} />
      </main>
      <footer className="footer">
        <p>Visit Lesotho. Student project for Web Design II (DIWP3110).</p>
      </footer>
      {selected && (
        <AttractionDetails
          attraction={selected}
          onClose={() => setSelected(null)}
          onEnquire={handleEnquire}
        />
      )}
    </>
  );
}

export default App;
