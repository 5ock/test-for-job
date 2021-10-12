import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import _ from 'lodash'
import cx from 'classnames'

import { PAGES } from '../consts/display'

const SideNavManu = React.memo(() => {
    const [ menuList, setMenuList ] = useState()

    const addChildren = children => {
        return _.map(children, el => {
            const { url, label } = el
            return {
                url: url,
                active: false,
                label: label
            }
        })
    }

    const getMenuList = () => _.map(PAGES, el => {
        const { url, label } = el
        let obj = {
            url: url,
            active: false,
            label: label
        }
        if(el.children) {
            obj.openNode = true
            obj.children = addChildren(el.children)
        }

        return obj
    })

    const disableAllActive= (list) => {
        return _.map(list, el=> {
            el.active = false
            if(el.children)
                el.children = disableAllActive(el.children)
            return el
        })
    }

    useEffect(() => {
        let newMenuList = getMenuList()
        newMenuList = disableAllActive(newMenuList)
        // const pathArray = _.compact(_.split(location.pathname, '/'))
        // let targetItem = _.find(newMenuList, o => o.url.indexOf(pathArray[0]) >= 0)
        // if(pathArray.length > 1)
        //     targetItem = _.find(targetItem.children, o => o.url.indexOf(pathArray[1]) >= 0)
        // _.set(targetItem, 'active', true)
        setMenuList(newMenuList)
    }, [JSON.stringify(location)])

    const handleOpenManuList = (url) => {
        let editManuList = _.cloneDeep(menuList)
        let targetItem = _.find(editManuList, o => o.url === url)
        targetItem.openNode = !targetItem.openNode
        setMenuList(editManuList)
    }

    const renderMenu = (menuList, isChildren=false) => {
        return _.map(menuList, (el, index) => {
            if(el.children) {
                return (
                    <li key={el.url} className='menu-item'>   
                        <span className={cx('menu-title')}
                            onClick={() => handleOpenManuList(el.url)}>
                            <i className={cx('fas', el.openNode ? 'fa-caret-down' : 'fa-caret-right', 'trigger-icon')} />
                            {el.label}
                        </span>
                        { el.openNode && 
                            <ul key={el.children}  className='sub-menu'>{ renderMenu(el.children, true) }</ul> }
                    </li>)
            }

            return (<li
                key={el.url}
                className={cx(!isChildren ? 'menu-item menu-title' : 'sub-menu-item')}>
                <Link to={{pathname: el.url}}>
                    <span className={cx({'active': el.active})}>{el.label}</span>
                </Link>
            { !isChildren && <div className='hr-line' /> }
            </li>)
        })
    }

    if(_.isEmpty(menuList))
        return null

    return <ul id='g-side-menu'
        key='g-side-menu'
        style={{marginTop: '40px'}}>
        { renderMenu(menuList) }
    </ul>
})

SideNavManu.defaultProps = {

}

SideNavManu.propTypes = {
}

export default SideNavManu