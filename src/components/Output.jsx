import { connect } from 'react-redux';

const Output = (props) => {
    return (
        <div>
            <h3>{props.name} prefers: {props.drink}</h3>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        name: state.name,
        drink: state.drink
    }
}

export default connect(mapStateToProps)(Output);