import { useState, useEffect } from "react";
import { Link } from "react-router";

function AuthorsList() {
    const [authors, setAuthors] = useState([]);
    useEffect(() => {
        fetch("https://frontend53.somee.com/api/authors")
            .then((res) => res.json())
            .then((data) => setAuthors(data.payload.items));
    }, []);

    return (
        <div className="container">
            <h2>Список авторів</h2>
            
            <Link to="/add-author">
                <button className="primary-btn">Додати нового автора</button>
            </Link>
            
            <div className="authors-grid">
                {authors.map((author) => (
                    <div key={author.id} className="author-card">
                        <img src={author.image} alt={author.name} />
                        <h3>{author.name}</h3>
                        <p><strong>Країна:</strong> {author.country}</p>
                        <p className="bio">{author.biography}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AuthorsList;