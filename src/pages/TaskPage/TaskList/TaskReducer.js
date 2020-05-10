// actions
const INITIAL = "INITIAL";
const TOGGLE_COMPLETE = "TOGGLE_COMPLETE";
const ADD = "ADD";
export const COMP_ALL = "COMP_ALL";

// action creators
export const toggleComplete = id => ({
    type: TOGGLE_COMPLETE,
    id
});

export const fetchInitial = data => ({
    type: INITIAL,
    data
});

export const addTodo = data => {
    if (!data) return;

    return {
        type: ADD,
        data
    };
};

export const reducer = (state, action) => {
    switch (action.type) {
        case INITIAL:
            return [...action.data];
        case TOGGLE_COMPLETE:
            return state.map(todo => {
                if (todo.id === action.id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    };
                }
                return todo;
            });
        case COMP_ALL:
            return state.map(todo => {
                if (todo.completed === false) {
                    return {
                        ...todo,
                        completed: true
                    };
                }
                return todo;
            });
        case ADD:
            return [action.data, ...state];
        default:
            return state;
    }
};