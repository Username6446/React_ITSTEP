import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import AuthorsList from "./components/AuthorsList";
import AddAuthor from "./components/AddAuthor";
import "./components/SimpleStyles.css";

function App() {
    return (
        <div>
            <Navbar />
            
            <Routes>
                <Route path="/" element={<AuthorsList />} />
                <Route path="/authors" element={<AuthorsList />} />
                <Route path="/add-author" element={<AddAuthor />} />
            </Routes>
        </div>
    );
}

export default App;