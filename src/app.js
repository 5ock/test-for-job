import React, { useState } from 'react'
import '../assets/less/global.less'
import '@fortawesome/fontawesome-free/css/all.min.css'

// import SideNav from './components/sideNav'
// import Main from './components/main'

import SideNavManu from './components/sideNavMenu'

const drawerWidth = 240

const App = React.memo(({ children }) => {
    const [ curItem, setCurItem ] = useState('')
    return (<>
        <SideNavManu />
        { children }
    </>)
})

export default App