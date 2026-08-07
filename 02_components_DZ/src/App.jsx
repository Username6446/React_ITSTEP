import CityInfo from "./components/CityInfo/CityInfo";
import FavoriteMovie from "./components/FavoriteMovie/FavoriteMovie";
import PetInfo from "./components/PetInfo/PetInfo";
import MusicBand from "./components/MusicBand/MusicBand";

function App() {
  const cityData = {
    name: "Львів",
    country: "Україна",
    foundedYear: 1256,
    landmarks: [
      { name: "Оперний театр", image: "https://upload.wikimedia.org/wikipedia/commons/5/57/%D0%9B%D1%8C%D0%B2%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D0%BE%D0%BF%D0%B5%D1%80%D0%BD%D0%B8%D0%B9_%D1%82%D0%B5%D0%B0%D1%82%D1%80.jpg?utm_source=uk.wikipedia.org&utm_campaign=index&utm_content=original" },
      { name: "Ратуша", image: "https://lviv.travel/image/news/99/78/99783d62a5876cfa44b201c791496b4f0e379957_1581667807.jpeg?crop=2687%2C1446%2C-1%2C12" }
    ]
  };

  const movieData = {
    title: "Інтерстеллар",
    director: "Крістофер Нолан",
    year: 2014,
    studio: "Warner Bros.",
    poster: "https://upload.wikimedia.org/wikipedia/uk/2/29/Interstellar_film_poster2.jpg"
  };

  const petData = {
    name: "Барсік",
    type: "Кіт",
    breed: "Шотландський висловухий",
    age: "3 роки",
    image: "https://www.myzoomag.com.ua/image/catalog/4151.jpg"
  };

  const bandData = {
    name: "The Beatles",
    members: ["Джон Леннон", "Пол Маккартні", "Джордж Харрісон", "Рінго Старр"],
    albums: [
      { title: "Abbey Road", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ7OwGHPX2kxhixecCKdrG6M-0BcOlHBuqa7TAnm5cbA&s=10" },
      { title: "Help!", cover: "https://i1.sndcdn.com/artworks-Bs16uAKzCRrz8LC0-oP9r1Q-t500x500.jpg" }
    ]
  };

  return (
    <div style={{ maxWidth: "700px", margin: "20px auto", fontFamily: "sans-serif" }}>
      <CityInfo city={cityData} />
      <FavoriteMovie movie={movieData} />
      <PetInfo pet={petData} />
      <MusicBand band={bandData} />
    </div>
  );
}

export default App;