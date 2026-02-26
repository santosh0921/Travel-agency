import { useState, useMemo } from "react";
import destinationsData from "../data/Destinations";
import DestinationCard from "../components/DestinationCard";

function Destinations() {
  const [search, setSearch] = useState("");

  const filteredDestinations = useMemo(() => {
    return destinationsData.filter((place) =>
      place.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div className="container">
      <h1>Explore Destinations 🌍</h1>

      <input
        type="text"
        placeholder="Search destination..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid">
        {filteredDestinations.map((place, index) => (
          <DestinationCard key={index} place={place} />
        ))}
      </div>
    </div>
  );
}

export default Destinations;