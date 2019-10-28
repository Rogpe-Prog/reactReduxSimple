const initialState = { balance: 100, valueBalance: 0 }

export default function(state = initialState, action) {
    switch (action.type) {
        case 'PLUS':
            return { ...state, balance: state.balance + state.valueBalance }
        case 'MINUS':
            return { ...state, balance: state.balance - state.valueBalance }
        case 'BALANCE_CHANGED':
            return { ...state, valueBalance: + action.payload }
        default:
            return state
    }
}