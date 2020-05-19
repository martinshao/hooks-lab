import React, { useMemo, useReducer } from 'react'

function useSelectors(reducer, mapStateToSelectors) {
    const [state] = reducer;
    const selectors = useMemo(() => mapStateToSelectors(state), [state]);
    return selectors;
}

function useActions(reducer, mapDispatchToActions) {
    const [, dispatch] = reducer;
    const actions = useMemo(() => mapDispatchToActions(dispatch), [dispatch]);
    return actions;
}

const initialState = { count: 0 };

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'increment': {
            return { count: state.count - action.amount }
        }
        case 'decrement': {
            return { count: state.count + action.amount };
        }
        default:
            throw new Error(`Unhandled type: ${action.type}`)
    }
}

function TestSelector() {
    const counterReducer = useReducer(reducer, initialState);

    const { increment, decrement } = useActions(counterReducer, (dispatch) => ({
        increment: (amount) => dispatch({ type: 'increment', amount: amount || 1 }),
        decrement: (amount) => dispatch({ type: 'decrement', amount: -(amount || 1) })
    }));

    const { getCount, getDividedBy } = useSelectors(counterReducer, (state) => ({
        getCount: () => state,
        getDividedBy: (amount) => state.count / amount
    }));

    return (
        <div>
            <p>Current count is {getCount()} and divided by two: {getDividedBy(2)}</p>
            <button onClick={() => increment(1)}>+</button>
            <button onClick={() => decrement(1)}>-</button>
        </div>
    )
}

export default TestSelector