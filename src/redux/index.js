import _ from 'lodash'
import { createStore, combineReducers } from 'redux'

import app from './app'

const reducers = combineReducers({
    app
})

export const create = state => createStore(reducers)

export default reducers