
import { useEffect, useState } from "react";
import { getEvents } from "../services/api";
import HackathonCard from "../components/HackathonCard";
import SearchBar from "../components/SearchBar";

function Hackathons() {
  const [hackathons, setHackathons] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getEvents()
      .then((data) => {
        const filtered = data.filter(
          (event) =>
            event.category?.toLowerCase() === "hackathon"
        );
        setHackathons(filtered);
      })
      .catch((error) => {
        console.error("Unable to load hackathons:", error);
      });
  }, []);

  const filteredHackathons = hackathons.filter((hackathon) =>
    hackathon.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="events-section" id="hackathons">
      <h2>Hackathons</h2>

      <SearchBar search={search} setSearch={setSearch} />

      <div className="events-grid">
        {filteredHackathons.length > 0 ? (
          filteredHackathons.map((hackathon) => (
            <HackathonCard
              key={hackathon._id}
              hackathon={hackathon}
            />
          ))
        ) : (
          <p>No hackathons found.</p>
        )}
      </div>
    </section>
  );
}

export default Hackathons;