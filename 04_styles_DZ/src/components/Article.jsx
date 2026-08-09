import PropTypes from "prop-types";
import "./Article.css";

function Article({
    title, 
    author, 
    text, 
    date, 
    imageUrl,
    fontStyles = { fontFamily: "sans-serif", fontSize: "16px", color: "black" },
    bgColors = { containerBg: "white", headerBg: "#f0f0f0", contentBg: "white" },
    layout = { imagePosition: "left", titleAlign: "center" }
}) {
    console.log("Article render");
    const contentDirection = layout.imagePosition === "right" ? "row-reverse" : "row";

    return (
        <div 
            className="article-container" 
            style={{ 
                backgroundColor: bgColors.containerBg,
                fontFamily: fontStyles.fontFamily,
                fontSize: fontStyles.fontSize,
                color: fontStyles.color
            }}
        >
            <div 
                className="article-header" 
                style={{ 
                    backgroundColor: bgColors.headerBg, 
                    textAlign: layout.titleAlign 
                }}
            >
                <h1>{title}</h1>
                <p className="article-meta">
                    <strong>Автор:</strong> {author} | <strong>Дата:</strong> {date}
                </p>
            </div>

            <div 
                className="article-content" 
                style={{ 
                    backgroundColor: bgColors.contentBg,
                    flexDirection: contentDirection 
                }}
            >
                {imageUrl && (
                    <img src={imageUrl} alt={title} className="article-image" />
                )}
                
                <div className="article-text">
                    <p>{text}</p>
                </div>
            </div>
        </div>
    );
}


Article.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    fontStyles: PropTypes.object,
    bgColors: PropTypes.object,
    layout: PropTypes.object
};

export default Article;