import React from 'react'

export default function Item(props) {
    return (
        <li>
            <span onClick={() => props.toggle(props.item.id)}
                  style={{textDecoration : props.item.complete ? 'line-through' : 'none'}}>
            {props.item.name}
            </span>
            &nbsp;
            <button onClick={() => props.remove(props.item)}>xXx</button>
        </li>
    )
}