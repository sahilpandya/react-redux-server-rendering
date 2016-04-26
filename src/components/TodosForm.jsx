import React from 'react';
import cookie from 'react-cookie';

export default class TodosForm extends React.Component {
  
  handleSubmit = () => {
    let node = this.refs['todo-input'];
    this.props.createTodo(node.value);
    
    node.value = '';
  }
  
  render() {
    const divStyle = {
      float: 'left',
      marginRight: '100px',
      padding: '20px'
    };
    return (
      <div id="todo-form" style={divStyle}>
        <p>Add ToDo:</p>
        <input type="text" placeholder="Enter your todo" ref="todo-input" />
        <input type="submit" value="OK!" onClick={this.handleSubmit} />
      </div>
    );
  }
}
