export const set = (num) => {
    return {
        type: 'SET',
        payload: num
    }
}
export const increment = (num) => {
    return {
        type: 'INCREMENT',
        payload: num
    }
}
export const decrement = (num) => {
    return {
        type: 'DECREMENT',
        payload: num
    }
}