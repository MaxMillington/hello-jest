import React from 'react'
import PropTypes from 'prop-types'
import './App.css';

const MyComp = (props) => {
    return (
        <div>
            <p className="App-intro" onClick={props.click}>
                To get started, edit <code>src/App.js</code> and save to reload.
            </p>
        </div>
    )
}

MyComp.propTypes = {
    click: PropTypes.func.isRequired
}

export default MyComp;
