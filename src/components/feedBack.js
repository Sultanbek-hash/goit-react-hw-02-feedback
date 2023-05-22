import React from "react";
import PropTypes from 'prop-types';


const FeedbackOptions = ({options, onLeaveFeedback }) => (
        <>
        <div className="container-btn">
            {options.map(item => {
                return (
                    <button className="feedback__btn btn" key={item}
             value={item}
             type="button"
             onClick={() => onLeaveFeedback(item)}
         >{item}</button>
                );
            })}
            </div>
        </>
);

export default FeedbackOptions;

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};
