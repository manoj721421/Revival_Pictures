/* eslint-disable default-case */
const initialValue = {
    cardData: []
}


export default function cardItems(state = initialValue, action) {
    switch (action.type) {
        case "ADD_TO_WISHLIST":
            return {
                ...state,
                cardData: action.payload
            }
            // eslint-disable-next-line no-unreachable
            break;
        default:
            return state;
    }
}