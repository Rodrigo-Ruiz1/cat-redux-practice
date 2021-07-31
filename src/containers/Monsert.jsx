import React from 'react';
import { connect } from 'react-redux';
import { actionSetDrink } from '../actions';

const Monsert = (props) => {
    return (
        <button onClick={props.handleClick}>MONSERT</button>
    )
};

function mapDispatchToProps(dispatch) {
    return{
        handleClick: () => {
            dispatch(actionSetDrink('MONSERT'));
        }
    }
}

export default connect(null, mapDispatchToProps)(Monsert)