import React from "react";
import PropTypes from 'prop-types';

const Section = ({ title, children}) => {
    return(
        <section className="container">
            <h1 className="heading">
                {title}
            </h1>
            {children}
        </section>
    );
};

export default Section;

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.array.isRequired,
};