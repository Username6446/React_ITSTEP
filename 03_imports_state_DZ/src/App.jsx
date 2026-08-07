import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Task1Button from "./components/Task1Button/Task1Button";
import AdvancedCounter from "./components/Counters/AdvancedCounter";
import "./App.css";

function App() {
    console.log("App render");

    return (
        <>
            <Navbar />
            <div className="app-container">
                <Task1Button />
                <AdvancedCounter />
            </div>
            <Footer />
        </>
    );
}

export default App;