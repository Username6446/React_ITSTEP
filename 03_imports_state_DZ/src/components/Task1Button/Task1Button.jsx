import { useState } from "react";
import "./Task1Button.css";

function Task1Button() {
    console.log("Task1Button render");

    const [count, setCount] = useState(0);

    function increment() {
        setCount((prev) => prev + 1);
    }

    return (
        <div className="task-container">
            <h3>Завдання 1</h3>
            <button onClick={increment} className="task1-btn">
                {count}
            </button>
        </div>
    );
}

export default Task1Button;