const blogPosts = [
    {
        id: 1,
        title: "Як вивчити React у 2026 році?",
        text: "React топ.",
        date: "09.08.2026",
        tags: ["React", "JavaScript", "Frontend"]
    },
    {
        id: 2,
        title: "Думки вголос",
        text: "Сьогодні був чудовий день для написання коду.",
        date: "08.08.2026",
        tags: []
    }
];

function BlogCard({ post }) {
    return (
        <div style={{ borderBottom: "1px solid #ccc", paddingBottom: "20px", marginBottom: "20px", textAlign: "left" }}>
            <h2 style={{ marginBottom: "5px" }}>{post.title}</h2>
            <small style={{ color: "gray" }}>Опубліковано: {post.date}</small>
            <p>{post.text}</p>
            
            {post.tags && post.tags.length > 0 && (
                <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                    {post.tags.map((tag, index) => (
                        <span key={index} style={{ color: "blue", cursor: "pointer" }}>
                            #{tag}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
}

export default function BlogList() {
    return (
        <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
            <h2>Останні записи блогу</h2>
            {blogPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
            ))}
        </div>
    );
}