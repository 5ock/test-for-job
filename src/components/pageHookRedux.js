import React from 'react'
import { Provider }  from 'react-redux'
import { create as createStore } from '../redux'

import Father from './hookRedux/father'

const store = createStore()

const HookRedux = () => (<Provider store={store}>
    <Father />
</Provider>)

// const HookRedux = () => <Father />

export default HookRedux