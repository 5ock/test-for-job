import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import App from './app'

import Home from './components/pageHome'
import HookRedux from './components/pageHookRedux'
import VideoAndPTZ from './components/pageVideoAndPTZ'

export const routes = () => {
    return <App>
	    <Switch>
            <Route path={'/home'} component={Home} />
            <Route path={'/hookRedux'} component={HookRedux} />
            <Route path={'/videoAndPTZ'}  component={VideoAndPTZ} />
            <Redirect to="/home" />
		</Switch>
	</App>
}
