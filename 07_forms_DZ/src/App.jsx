import RegistrationForm from "./components/RegistrationForm";
import Phonebook from "./components/Phonebook";
import "./App.css";

function App() {
    return (
        <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
            <RegistrationForm />
            <Phonebook />
        </div>
    );
}

export default App;