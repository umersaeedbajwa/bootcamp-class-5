const CounterReducer = (state, action) => {
    switch(action){
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1 
        case 'MULTIPLY 2':
            return state * 2
        case "DEFAULT":
            return state = 1
    }
}

export default CounterReducer;