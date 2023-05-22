import { Component } from "react";
import PropTypes from 'prop-types';

class Notification extends Component {
    render(){
        return(
            <>
            <h3 className="title__message">
                {this.props.message}
            </h3>
            </>
        )
    }
}
export default Notification;

Notification.propTypes = {
    message: PropTypes.string.isRequired,
};