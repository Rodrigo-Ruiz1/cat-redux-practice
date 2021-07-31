import React from 'react';
import { connect } from 'react-redux';
import { actionSetDrink } from '../actions';

const DrPebba = (props) => {
    return (
        <button onClick={props.handleClick}>DR PEBBA</button>
    )
};

function mapDispatchToProps(dispatch) {
    return{
        handleClick: () => {
            dispatch(actionSetDrink('DR PEBBA'));
        }
    }
}

export default connect(null, mapDispatchToProps)(DrPebba)