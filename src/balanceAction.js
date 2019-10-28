export function plus() {
    return { type: 'PLUS' }
}
export function minus() {
    return { type: 'MINUS' }
}
export function balanceChanged(e) {
    return {
        type: 'BALANCE_CHANGED',
        payload: e.target.value
    }
}