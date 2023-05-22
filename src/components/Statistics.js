import React from "react";
import PropTypes from 'prop-types';


const Statistics = ({good, neutral, bad, total, positivePercentge}) =>{
    return(
        <>
        <div className="statistic__div">
        <h2 className="heading">Statistics</h2>
            <ul className="statistic__list">
            <li className="statistic__item">
                <span>Good:</span>
                <span>{good}</span>
            </li>
            <li className="statistic__item">
                <span>Neutral:</span>
                <span>{neutral}</span>
            </li>
            <li className="statistic__item">
                <span>Bad:</span>
                <span>{bad}</span>
            </li>
            <li className="statistic__item">
                <span>Total:</span>
                <span>{total}</span>
            </li>
            <li className="statistic__item">
                <span>Positive feedback:</span>
                <span>{positivePercentge}%</span>
            </li>
        </ul>
        </div>
        </>
    );
};

export default Statistics;

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentge: PropTypes.number.isRequired,
}