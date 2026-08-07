import PropTypes from "prop-types";

function CounterDisplay({ currentValue }) {
    console.log("CounterDisplay render");

    return (
        <div>
            <h2>Значення лічильника: {currentValue}</h2>
        </div>
    );
}

// Перевіряємо, що currentValue обов'язково має бути числом
CounterDisplay.propTypes = {
    currentValue: PropTypes.number.isRequired
};

export default CounterDisplay;