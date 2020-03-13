import { useMachine } from '@xstate/react'
import { Machine } from 'xstate'
import React from 'react'

const toggleMachine = Machine({
  id: 'toggle',
  initial: 'inactive',
  states: {
    inactive: {
      on: { TOGGLE: 'active' },
    },
    active: {
      on: { TOGGLE: 'inactive' },
    },
  },
})

export const Xstate = () => {
  const [state, send] = useMachine(toggleMachine)

  return (
    <button onClick={() => send('TOGGLE')}>
      {state.value === 'inactive' ? 'Click to activate' : 'Active! Click to deactivate'}
    </button>
  )
}
