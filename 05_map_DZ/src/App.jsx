import MoviesList from "./components/MoviesList";
import BlogList from "./components/BlogList";
import CitiesList from "./components/CitiesList";
import "./App.css";

function App() {
    return (
        <div style={{ fontFamily: "sans-serif" }}>
            <MoviesList />
            <hr />
            <BlogList />
            <hr />
            <CitiesList />
        </div>
    );
}

export default App;