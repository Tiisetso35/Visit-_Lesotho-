import { useEffect } from "react";

function AttractionDetails({ attraction, onClose, onEnquire }) {
  // Close the popup with the Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  // Stop the page behind the popup from scrolling while it is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const { name, image, location, category, description, activities, cost } = attraction;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close details">
          Close
        </button>
        <img className="modal-img" src={image} alt={name} />
        <div className="modal-body">
          <span className="card-category">{category}</span>
          <h2>{name}</h2>
          <p className="card-location">{location}</p>
          <p>{description}</p>
          <h4>Activities available</h4>
          <ul>
            {activities.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
          <p className="card-cost">Estimated cost: {cost}</p>
          <button className="enquire-btn" onClick={() => onEnquire(attraction)}>
            Enquire about this place
          </button>
        </div>
      </div>
    </div>
  );
}

export default AttractionDetails;
