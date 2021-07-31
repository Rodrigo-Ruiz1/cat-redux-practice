import React from 'react';
import { connect } from 'react-redux';
import { actionSetDrink } from '../actions';

const RooBeer = (props) => {
    return (
        <button onClick={props.handleClick}>ROOBEER</button>
    )
};

function mapDispatchToProps(dispatch) {
    return{
        handleClick: () => {
            dispatch(actionSetDrink('ROOBEER'));
        }
    }
}

export default connect(null, mapDispatchToProps)(RooBeer)