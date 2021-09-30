import React, { useState } from 'react'
import _ from 'lodash'
// import cx from 'classnames'
import { List, ListItem, ListItemText } from '@material-ui/core'

const sideNavData = [
    {
        key: 'dateRange',
        text: 'Date Range'
    },
    {
        key: 'ptzController',
        text: 'PTZ Controller'
    }
] 

const SideNav = React.memo((props) => {
    const { onClick } = props
    
    const handleClickEvent = (key) => onClick(key)

    return <nav id='side-nav'>
      <List>
        {
            _.map(sideNavData, el => {
                return (<ListItem button key={el.key} onClick={key => handleClickEvent(key)}>
                    <ListItemText primary={el.text} />
                </ListItem>)
            })
        }
      </List>
    </nav>
})

export default SideNav