export const ACTION_SET_DRINK = 'drink';
export const ACTION_SET_NAME = 'name';

export function actionSetDrink(drink) {
    return {
        type: ACTION_SET_DRINK,
        payload: drink
    };
}

export function actionSetName(name) {
    return {
        type: ACTION_SET_NAME,
        payload: name
    };
}