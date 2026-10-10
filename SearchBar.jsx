
function SearchBar({ search, setSearch }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search events or hackathons..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button
        type="button"
        onClick={() => setSearch("")}
      >
        Clear
      </button>
    </div>
  );
}

export default SearchBar;