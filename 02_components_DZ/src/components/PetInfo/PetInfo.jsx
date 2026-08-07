import "./PetInfo.css";

const PetInfo = ({ pet }) => {
  return (
    <div className="pet-card">
      <img className="pet-image" src={pet.image} alt={pet.name} />
      <div className="pet-details">
        <h1>{pet.name}</h1>
        <p><strong>Тварина:</strong> {pet.type}</p>
        <p><strong>Порода:</strong> {pet.breed}</p>
        <p><strong>Вік:</strong> {pet.age}</p>
      </div>
    </div>
  );
};

export default PetInfo;