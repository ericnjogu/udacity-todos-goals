import React from 'react'
import {connect} from 'react-redux'

function Item(props) {
    return (
        <li>
            <span onClick={() => props.dispatch(props.toggle(props.item.id))}
                  style={{textDecoration : props.item.complete ? 'line-through' : 'none'}}>
            {props.item.name}
            </span>
            &nbsp;
            <button onClick={() => props.dispatch(props.remove(props.item))}>xXx</button>
        </li>
    )
}

export default connect()(Item)