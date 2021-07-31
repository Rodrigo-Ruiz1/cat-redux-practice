import React from 'react';
import { connect } from 'react-redux';
import { actionSetDrink } from '../actions';

const Spirte = (props) => {
    return (
        <button onClick={props.handleClick}>SPIRTE</button>
    )
};

function mapDispatchToProps(dispatch) {
    return{
        handleClick: () => {
            dispatch(actionSetDrink('SPIRTE'));
        }
    }
}

export default connect(null, mapDispatchToProps)(Spirte)