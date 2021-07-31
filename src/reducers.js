import { ACTION_SET_DRINK, ACTION_SET_NAME } from "./actions";

export function drink(state, action) {
    switch (action.type) {
        case ACTION_SET_NAME:
            return {
                ...state,
                name: action.payload
            }
            case ACTION_SET_DRINK:
                return {
                    ...state,
                    drink: action.payload
                }
                default:
                    return state;
    }
}