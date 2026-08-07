import { useState } from "react";
import CounterDisplay from "./CounterDisplay";
import CounterButton from "./CounterButton";
import "./AdvancedCounter.css";

function AdvancedCounter() {
    console.log("AdvancedCounter render");
    const [count, setCount] = useState(0);

    function changeCounter(amount) {
        setCount((prev) => prev + amount);
    }

    return (
        <div className="task-container">
            <h3>Завдання 2 та 3</h3>
            
            <CounterDisplay currentValue={count} />

            <div className="buttons-row">
                <CounterButton step={1} onAction={changeCounter} />
                <CounterButton step={10} onAction={changeCounter} />
                <CounterButton step={-100} onAction={changeCounter} />
                <CounterButton step={25} onAction={changeCounter} />
            </div>
        </div>
    );
}

export default AdvancedCounter;