import "./CityInfo.css";

const CityInfo = ({ city }) => {
  return (
    <div className="city-card">
      <h1>{city.name}</h1>
      <p><strong>Країна:</strong> {city.country}</p>
      <p><strong>Рік заснування:</strong> {city.foundedYear}</p>
      
      <h3>Визначні місця:</h3>
      <div className="landmarks-list">
        {city.landmarks.map((landmark, index) => (
          <div key={index} className="landmark-item">
            <img className="landmark-image" src={landmark.image} alt={landmark.name} />
            <p>{landmark.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CityInfo;