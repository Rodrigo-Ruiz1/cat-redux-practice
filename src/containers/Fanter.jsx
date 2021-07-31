import React from 'react';
import { connect } from 'react-redux';
import { actionSetDrink } from '../actions';

const Fanter = (props) => {
    return (
        <button onClick={props.handleClick}>FANTER</button>
    )
};

function mapDispatchToProps(dispatch) {
    return{
        handleClick: () => {
            dispatch(actionSetDrink('FANTER'));
        }
    }
}

export default connect(null, mapDispatchToProps)(Fanter)