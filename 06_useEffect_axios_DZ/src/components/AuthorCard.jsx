import { useState } from "react";

function AuthorCard({ author }) {
    const [cardHover, setCardHover] = useState(false);
    const defaultImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP-tm8faXPT3jx1k9YvLMiVinFj4LcrJA8eAa38t04Zg&s=10";
    function imgErrorHandler(event) {
        const img = event.target;
        img.src = defaultImage;
    }

    return (
        <div
            onMouseEnter={() => setCardHover(true)}
            onMouseLeave={() => setCardHover(false)}
            style={{
                textAlign: "start",
                border: "1px solid gray",
                padding: "20px",
                width: "250px",
                backgroundColor: "#2a2a2a",
                color: "white",
                borderRadius: "8px",
                transform: cardHover ? "translate(0px, -10px)" : "translate(0px, 0px)",
                transition: "transform 100ms linear",
            }}
        >
            <div style={{ padding: "0px", marginBottom: "16px" }}>
                <img
                    style={{
                        width: "100%",
                        height: "280px",
                        objectFit: "cover",
                        borderRadius: "4px"
                    }}
                    alt={author.name}
                    src={author.image ? author.image : defaultImage}
                    onError={imgErrorHandler}
                />
            </div>
            
            <div style={{ fontWeight: "600", fontSize: "1.2em", marginBottom: "8px" }}>
                {author.name}
            </div>
            
            <div style={{ fontSize: "0.9em", color: "#aaa", marginBottom: "12px" }}>
                🌍 {author.country}
            </div>
            
            <div style={{ 
                fontSize: "0.85em", 
                color: "#ddd",
                display: "-webkit-box",
                WebkitLineClamp: 4,
                WebkitBoxOrient: "vertical",
                overflow: "hidden"
            }}>
                {author.biography}
            </div>
        </div>
    );
}

export default AuthorCard;