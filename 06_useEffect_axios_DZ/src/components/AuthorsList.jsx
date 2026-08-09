import { useState, useEffect } from "react";
import AuthorCard from "./AuthorCard";

function AuthorsList() {
    const [authors, setAuthors] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://frontend53.somee.com/api/authors")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Помилка завантаження даних із сервера");
                }
                return response.json();
            })
            .then((data) => {
                setAuthors(data.payload.items);
                setIsLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setIsLoading(false);
            });
    }, []);
    if (isLoading) {
        return <h2 style={{ textAlign: "center" }}>Завантаження авторів... ⏳</h2>;
    }

    if (error) {
        return <h2 style={{ textAlign: "center", color: "red" }}>Помилка: {error}</h2>;
    }

    return (
        <div style={{ padding: "20px" }}>
            <h1 style={{ textAlign: "center", marginBottom: "30px" }}>Список Авторів</h1>
            
            <div style={{ display: "flex", flexWrap: "wrap", gap: "25px", justifyContent: "center" }}>
                {authors.map((author) => (
                    <AuthorCard key={author.id} author={author} />
                ))}
            </div>
        </div>
    );
}

export default AuthorsList;