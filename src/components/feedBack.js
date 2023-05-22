import React from "react";
import PropTypes from 'prop-types';


const FeedbackOptions = ({options, onLeaveFeedback }) => (
        <>
        <div className="container-btn">
            {options.map(({id, name, value}) => (
                <button className="feedback__btn btn" key={id}
                    value={value}
                    type="button"
                    onClick={() => onLeaveFeedback(value)}
                >{name}</button>
            ))}
            </div>
        </>
);

export default FeedbackOptions;

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};