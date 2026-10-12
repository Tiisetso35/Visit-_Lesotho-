function FeaturedDestinations({ destinations, onSelect }) {
  return (
    <section className="section">
      <h2>Featured destinations</h2>
      <div className="featured-grid">
        {destinations.map((d) => (
          <button key={d.id} className="featured-item" onClick={() => onSelect(d)}>
            <img src={d.image} alt={d.name} />
            <span className="featured-name">{d.name}</span>
            <span className="featured-location">{d.location}</span>
          </button>
        ))}
      </div>
    </section>
  );
}

export default FeaturedDestinations;
