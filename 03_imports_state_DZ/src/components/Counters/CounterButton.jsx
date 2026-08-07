import PropTypes from "prop-types";

function CounterButton({ step, onAction }) {
    console.log(`CounterButton render (крок: ${step})`);

    const buttonText = step > 0 ? `+${step}` : step;

    return (
        <button className="action-btn" onClick={() => onAction(step)}>
            {buttonText}
        </button>
    );
}


CounterButton.propTypes = {
    step: PropTypes.number.isRequired,
    onAction: PropTypes.func.isRequired
};

export default CounterButton;