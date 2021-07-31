import { connect } from 'react-redux';
import { actionSetName } from '../actions';
import { useState } from 'react';

const NameForm = (props) => {
    const [name, setName ] = useState('');

    const _handleSubmit = (event) => {
        event.preventDefault();
        props.handleClick(name)
        setName('')
    }

    return (
        <>

        <form onSubmit={(event) => _handleSubmit(event)}>
            <input type="text" value={name} onChange={(event)=> setName(event.target.value)}></input>
            <button type="submit">Set Name</button>
        </form>

        </>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        handleClick: (name) => {
            dispatch(actionSetName(name));
        }
    }
}

export default connect(null, mapDispatchToProps)(NameForm)