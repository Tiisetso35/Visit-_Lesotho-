function AttractionCard({ attraction, onSelect }) {
  const { name, image, location, category, description, cost } = attraction;

  return (
    <article className="card">
      <img className="card-img" src={image} alt={name} />
      <div className="card-body">
        <span className="card-category">{category}</span>
        <h3>{name}</h3>
        <p className="card-location">{location}</p>
        <p>{description}</p>
        <p className="card-cost">Estimated cost: {cost}</p>
        <button onClick={() => onSelect(attraction)}>View details</button>
      </div>
    </article>
  );
}

export default AttractionCard;
