import React from 'react';
import { connect } from 'react-redux';
import { actionSetDrink } from '../actions';

const Pepsie = (props) => {
    return (
        <button onClick={props.handleClick}>PEPSIE</button>
    )
};

function mapDispatchToProps(dispatch) {
    return{
        handleClick: () => {
            dispatch(actionSetDrink('PEPSIE'));
        }
    }
}

export default connect(null, mapDispatchToProps)(Pepsie)