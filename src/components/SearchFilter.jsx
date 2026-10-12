function SearchFilter({ search, onSearchChange, category, onCategoryChange, categories }) {
  return (
    <div className="search-filter">
      <input
        type="text"
        placeholder="Search attractions by name..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        aria-label="Search attractions by name"
      />
      <select
        value={category}
        onChange={(e) => onCategoryChange(e.target.value)}
        aria-label="Filter by category"
      >
        {categories.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>
    </div>
  );
}

export default SearchFilter;
