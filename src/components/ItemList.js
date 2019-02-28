import React from 'react'
import Item from './Item'
import {connect} from 'react-redux'

class ItemList extends React.Component {
    addItem = (e) => {
        e.preventDefault()
        const value = this.input.value
        this.props.dispatch(this.props.add(value, () => this.input.value = ''))

    }

    render() {
        return (
            <div>
                <h3>{this.props.item_title}s</h3>
                <input id="todo" type="text" placeholder={`Add ${this.props.item_title}`} ref={(input) => this.input = input}/>
                <button onClick={this.addItem} >Add {this.props.item_title}</button>
                <ul>
                    {this.props.items.map(item =>
                        <Item key={item.id} item={item} toggle={this.props.toggle} remove={this.props.remove}/>
                    )}
                </ul>
            </div>
        )
    }
}

export default connect()(ItemList)