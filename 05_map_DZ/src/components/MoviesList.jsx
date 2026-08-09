import { useState } from "react";

const moviesData = [
    {
        id: 1,
        title: "Дюна: Частина друга",
        description: "Пол Атрід об'єднується з фременами, щоб помститися змовникам.",
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMuvi1J5tffICU7kpENdG8c32LFlU4liVrw78FvdJSUg&s=10",
        sessions: ["10:00", "13:30", "18:15", "21:00"]
    },
    {
        id: 2,
        title: "Поганий постер",
        description: "Фільм, у якого не завантажилась картинка (спрацює onError).",
        poster: "bad-link.jpg", 
        sessions: []
    }
];

function MovieCard({ movie }) {
    const [cardHover, setCardHover] = useState(false);
    const defaultImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBVBlKbLRS_BlcvrCUAYGgcU-jXDvM3-XbFjU7Zk98xA&s=10";

    function imgErrorHandler(event) {
        event.target.src = defaultImage;
    }

    return (
        <div
            onMouseEnter={() => setCardHover(true)}
            onMouseLeave={() => setCardHover(false)}
            style={{
                border: "1px solid gray",
                padding: "20px",
                width: "250px",
                borderRadius: "8px",
                transform: cardHover ? "translateY(-5px)" : "translateY(0)",
                transition: "transform 200ms ease",
                backgroundColor: "#fff"
            }}
        >
            <img
                src={movie.poster ? movie.poster : defaultImage}
                alt={movie.title}
                onError={imgErrorHandler}
                style={{ width: "100%", borderRadius: "4px" }}
            />
            <h3>{movie.title}</h3>
            <p style={{ fontSize: "0.9em", color: "gray" }}>{movie.description}</p>
            
            <h4>Сеанси:</h4>
            <div style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
                {movie.sessions.length > 0 ? (
                    movie.sessions.map((time, index) => (
                        <span key={index} style={{ padding: "5px 10px", backgroundColor: "#e0e0e0", borderRadius: "4px" }}>
                            {time}
                        </span>
                    ))
                ) : (
                    <span style={{ color: "red" }}>Сеансів немає</span>
                )}
            </div>
        </div>
    );
}

export default function MoviesList() {
    return (
        <div style={{ padding: "20px" }}>
            <h2>Афіша кінотеатру</h2>
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                {moviesData.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
}