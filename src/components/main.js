import React from 'react'
import { Toolbar } from '@material-ui/core'

import VideoAndPTZ from './videoAndPTZ'
import HookRedux from './hookRedux'

const Main = React.memo(() => {
    return (<div id='main'> 
        <VideoAndPTZ />
        {/* <HookRedux /> */}
    </div>)
})

export default Main