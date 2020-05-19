import React from 'react'
import Switch from '@alicloud/console-components';
import Button from '@alicloud/console-components'

const noop = () => { }

// action
const actionTypes = {
    toggle: 'TOGGLE',
    on: 'ON',
    off: 'OFF',
}

function toggleReducer(state, action) {
    console.info('toggleReducer...')
    switch (action.type) {
        case actionTypes.toggle: {
            return { on: !state.on }
        }
        case actionTypes.on: {
            return { on: true }
        }
        case actionTypes.off: {
            return { on: false }
        }
        default:
            throw new Error(`Unhandled type: ${action.type}`)
    }
}

function useToggle({ reducer = toggleReducer } = {}) {
    const [{ on }, dispatch] = React.useReducer(reducer, { on: false })

    const toggle = () => dispatch({ type: actionTypes.toggle })
    const setOn = () => dispatch({ type: actionTypes.on })
    const setOff = () => dispatch({ type: actionTypes.off })

    return { on, toggle, setOn, setOff }
}

function Toggle() {
    const [clicksSinceReset, setClicksSinceReset] = React.useState(0)
    const tooManyClicks = clicksSinceReset >= 4
    console.info('clicksSinceReset...', clicksSinceReset)
    const { on, toggle, setOn, setOff } = useToggle({
        reducer(currentState, action) {
            const changes = toggleReducer(currentState, action)
            console.info('action type...', action.type)
            if (tooManyClicks && action.type === actionTypes.toggle) {
                // other changes are fine, but on needs to be unchanged
                console.info('too many clicks')
                return { ...changes, on: currentState.on }
            } else {
                // the changes are fine
                return changes
            }
        }
    })

    return (
        <div style={{ padding: 20, margin: 20, backgroundColor: '#f9f9f9' }}>
            <Button style={{ marginRight: 12 }} variant="contained" color="primary" onClick={setOff}>Switch Off</Button>
            <Button variant="contained" color="secondary" onClick={setOn}>Switch on</Button>
            <Switch
                color="primary"
                onChange={noop}
                onClick={() => {
                    toggle()
                    setClicksSinceReset(count => count + 1)
                }}
                checked={on}
            />
            {
                tooManyClicks ? (
                    <Button variant="contained" color="primary" onClick={() => setClicksSinceReset(0)}>Reset</Button>
                ) : null
            }
        </div>
    )
}

export default Toggle
