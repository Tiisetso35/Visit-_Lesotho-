import AttractionCard from "./AttractionCard";

function AttractionList({ attractions, onSelect }) {
  if (attractions.length === 0) {
    return <p>No attractions match your search. Try a different name or category.</p>;
  }

  return (
    <div className="card-grid">
      {attractions.map((item) => (
        <AttractionCard key={item.id} attraction={item} onSelect={onSelect} />
      ))}
    </div>
  );
}

export default AttractionList;
