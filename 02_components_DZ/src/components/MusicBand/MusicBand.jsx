import "./MusicBand.css";

const MusicBand = ({ band }) => {
  return (
    <div className="band-card">
      <h1>{band.name}</h1>

      <h3>Учасники гурту:</h3>
      <ul>
        {band.members.map((member, index) => (
          <li key={index}>{member}</li>
        ))}
      </ul>

      <h3>Альбоми:</h3>
      <div className="albums-list">
        {band.albums.map((album, index) => (
          <div key={index} className="album-item">
            <img className="album-cover" src={album.cover} alt={album.title} />
            <p className="album-title">{album.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MusicBand;