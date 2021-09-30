import React, { useState } from 'react'
import './assets/less/global.less'

import SideNav from './components/sideNav'
import Main from './components/main'

const drawerWidth = 240

const App = () => {
    const [ curItem, setCurItem ] = useState('')
    return (<>
        <SideNav onClick={item => setCurItem(item)}/>
        <Main />
    </>)
}

export default App