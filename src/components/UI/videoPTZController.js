import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import _ from 'lodash'

// import { } from './api_PTZ'

// use react 16 component
class VideoPTZControllar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isShowPTZPanel: true
        }
        this.handleShowPTZPanel = this.handleShowPTZPanel.bind(this)
    }
    componentDidMount() {
    }
    handleShowPTZPanel() {
        this.setState({isShowPTZPanel: !this.state.isShowPTZPanel})
    }
    render() {
        const { } = this.props
        const { isShowPTZPanel } = this.state
        return (<div className={'ptz-controller'}>
            { isShowPTZPanel
            ? [
                <i  className={cx('fa', 'fa-chevron-right hideLeftPanel')}
                    onClick={this.handleShowPTZPanel}
                    aria-hidden="true" />,
                <PtzControlPanel />
            ]
            : <i  className={cx('fa', 'fa-chevron-left popLeftPanel')}
                onClick={this.handleShowPTZPanel}
                aria-hidden="true" />
            }
        </div>)
    }
}

VideoPTZControllar.defaultProps = {
}

VideoPTZControllar.propTypes = {
}

export default VideoPTZControllar

class PtzControlPanel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            preSetList: [{value: '1', text:'one'}, {value: '2', text:'two'}],
            isAdd: false
        }

        this.handleAddPreset = this.handleAddPreset.bind(this)
        this.handleDeletePreset = this.handleDeletePreset.bind(this)
        this.handleGoto = this.handleGoto.bind(this)
        this.handleSetPreset = this.handleSetPreset.bind(this)
        this.handleMove = this.handleMove.bind(this)
    }
    componentDidMount() {
        this.handlePresetDropdownList()
    }
    handlePresetDropdownList() {
        // set dropdown list [{value: '', text: ''}]
    }
    handleAddPreset() {
        this.setState({isAdd: true})
    }
    handleDeletePreset() {

    }
    handleSetPreset() {

    }
    handleGoto() {

    }
    handleMove(xyz, action) {

    }
    renderDirectionController() {
        const directionAndMoveData = {
            LT: '-1  1  0',  T: '0  1  0', RT: '1  1  0',
            L : '-1  0  0',  C: '0  0  0', R : '1  0  0',
            LD: '-1 -1  0',  D: '0 -1  0', RD: '1 -1  0'
        }
        
        return (<div className='direction-btn-block'>{
            _.map(directionAndMoveData, (val, d) => (<div
                key={d}
                onMouseDown={() => this.handleMove(val, 'CONTINUE_MOVE')}
                onMouseUp={() => this.handleMove('0', 'STOP')}
                className={'direction-btn'}
            >{d + '-icon'}</div>))
        }</div>)
    }
    render() {
        const { preSetList } = this.state


        return (<div className='ptz-panel'>
            <div className='divider-w' />
            <div className='direction-block'>
                <div>{'ptz-direction'}</div>
                {this.renderDirectionController()}
            </div>
            <div className='divider-w' />
            <div className='preset-block'>
                <div>{'ptz-preset'}</div>
                <div className={'mt4'}>
                    <select className='preset-select' title='selected preset point'>
                        <option>preset-1</option>
                        <option>preset-2</option>
                    </select>
                    <i onClick={this.handleAddPreset} className="fa fa-plus presetIcon"  title='add'></i>
                    <i onClick={this.handleDeletePreset} className="fa fa-trash presetIcon" title='delete'></i>
                </div>
                <button className="PTZbutton mt4" onClick={this.handleSetPreset}>{'ptz-set'}</button>
                <button className="presetGotoBtn PTZbutton mt4" onClick={this.handleGoto}>{'ptz-goto'}</button>
            </div>            
            <div className='divider-w' />
            <div>
                <div>ptz speed setting</div>
                <div>
                    <span>speed limit: 0 - 100</span>
                    <input />
                </div>
            </div>
        </div>)
    }
}

PtzControlPanel.defaultProps = {
}

PtzControlPanel.propTypes = {
}