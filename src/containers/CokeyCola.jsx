import React from 'react';
import { connect } from 'react-redux';
import { actionSetDrink } from '../actions';

const CokeyCola = (props) => {
    return (
        <button onClick={props.handleClick}>COKEY COLA</button>
    )
};

function mapDispatchToProps(dispatch) {
    return{
        handleClick: () => {
            dispatch(actionSetDrink('COKEY COLA'));
        }
    }
}

export default connect(null, mapDispatchToProps)(CokeyCola)