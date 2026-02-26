function DestinationCard({ place }) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={place.image} alt={place.name} />
        <div className="price-tag">{place.price}</div>
      </div>

      <div className="card-content">
        <h3>{place.name}</h3>
        <p className="location">{place.location}</p>
        <p>⭐ {place.rating} Rating</p>
        <button>Book Now</button>
      </div>
    </div>
  );
}

export default DestinationCard;