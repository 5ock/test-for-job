import React from 'react'
import { Toolbar } from '@material-ui/core'
import VideoAndPTZ from './videoAndPTZ'

const Main = React.memo(() => {
    return (<div id='main'> 
        <VideoAndPTZ />
    </div>)
})

export default Main