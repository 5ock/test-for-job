import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import cx from 'classnames'

/**
 * A React Marquee
 * @constructor
 * @param {number} [rowHeight] - Marquee row height
 * @param {number} [duration] - Marquee duration time, unit: second * 
 * @param {Array.<object>} [dataList] - List of data. The sequence need to sort high to low by dateTime
 * @param {string} [dataList.description] - DataList description
 * @param {number} [dataList.dateTime] - DataList Unix time
 * @param {string} [className] - Component class name
 * 
// controlled
import Marquees from './Marquees'
<Marquees 
    dataList={[
        {
            description: '3...........',
            dateTime: '1666059300000'
        },
        {
            description: '2...........',
            dateTime: '1666059180000'
        },
        {
            description: '1...........',
            dateTime: '1666059000000'
        }
    ]}
/>
 */

const Marquees = React.memo((props) => {
    const { dataList, duration, className, rowHeight, speed } = props
    
    const [ marqueeList, setMarqueeList ] = useState(dataList.sort((a, b) => b.dateTime - a.dateTime))

    const _mounted = useRef(false)
    const _ul = useRef(null)
    const _moveEvent = useRef(null)

    const _pauseConut = useRef(0)
    const _pauseSetTimeEvent = useRef()
    const _counterEvent = useRef()

    if(_.isEmpty(dataList))
        return null

    useEffect(() => {
        if(!_mounted.current)
            return

        stop()

        let newMarqueeList
        let firstIndex = _.findIndex(dataList, item => _.isEqual(item, marqueeList[0]))

        if(firstIndex === -1)
            newMarqueeList = [marqueeList[0], ...dataList]
        else
            newMarqueeList = handleListSort(firstIndex, dataList)

        setMarqueeList(newMarqueeList)
        start()
    }, [dataList])

    const handleListSort = (firstIndex, list) => {
        let sortedList = _.cloneDeep(list)
        sortedList.push(sortedList[0])
        sortedList.shift()

        if(firstIndex - 1 <= 0)
            return sortedList
        else
            return handleListSort(firstIndex - 1, sortedList)
    }

    useEffect(() => {
        _ul.current.style.height = `${rowHeight}px`
        _ul.current.style.lineHeight = `${rowHeight}px`
        _ul.current.style.overflow = 'hidden'

        start()
        _mounted.current = true
        return (() => {
            stop()
        })
    }, [])

    const start = () => {
        if(dataList.length > 1)
            _moveEvent.current = setInterval(() => moveDown(), duration * 1000)
    }

    const stop = () => {
        clearInterval(_moveEvent.current)
        _moveEvent.current = null
    }

    const moveDown = () => {
        let firstLi = _ul.current.children[0]
        firstLi.style.margin = `-${rowHeight}px 0 0 0`
        firstLi.style.transition = `all ${speed}ms`

        setTimeout(() => {
            setMarqueeList(list => {
                let newMarqueeList = _.cloneDeep(list)
                let firstIndex = _.findIndex(dataList, item => _.isEqual(item, list[0]))
                if(firstIndex !== -1)
                    newMarqueeList.push(newMarqueeList[0])
                newMarqueeList.shift()
                return newMarqueeList
            })
            firstLi.style.margin = null
            firstLi.style.transition = null
        }, speed)
    }

    const pause = () => {
        clearInterval(_moveEvent.current)
        _moveEvent.current = null
        pauseCounter('start')
    }

    const unpause = () => {
        pauseCounter('stop')

        if(_pauseSetTimeEvent.current)
            return

        if(_pauseConut.current >= duration) {
            moveDown()
            start()
        } else {
            _pauseSetTimeEvent.current = setTimeout(() => {
                moveDown()
                start()
                clearTimeout(_pauseSetTimeEvent.current)
                _pauseSetTimeEvent.current = null
            }, (duration - _pauseConut.current) * 1000)
        }
        _pauseConut.current = 0
    }

    const pauseCounter = (type) => {
        if(type === 'start') {
            _counterEvent.current = setInterval(() => {
                _pauseConut.current++
            }, 1000)
        } else {
            clearInterval(_counterEvent.current)
            _counterEvent.current = null
        }
    }

    const liStyle = {
        width: '200px',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        cursor: 'default'
    }

    return (<ul
        id='g-marquess'
        className={cx('g-marquees', className)}
        ref={_ul}
        onMouseEnter={pause}
        onMouseLeave={unpause}
    >
        { _.map(marqueeList, (el, index) => {
                return <li
                    style={liStyle}
                    title={el.description}
                    key={index}>
                        {el.description}
                </li>
            })
        }
    </ul>)
})

Marquees.defaultProps = {
    newsList: [],
    duration: 3,
    rowHeight: 20,
    speed: 400
}

Marquees.propTypes = {
    newsList: PropTypes.array,
    duration: PropTypes.number,
    className: PropTypes.string,
    rowHeight: PropTypes.number,
    speed: PropTypes.number
}

export default Marquees