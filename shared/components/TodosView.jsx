import React from 'react';

export default class TodosView extends React.Component {
 /* componentDidMount() {
    this.props.getTodos();
  }
*/
  handleDelete = (e) => {
    const id = Number(e.target.dataset.id);
    
    // Equivalent to `dispatch(deleteTodo())`
    this.props.deleteTodo(id);
  }

  handleEdit = (e) => {
    const id  = Number(e.target.dataset.id);
    const val = this.props.todos.get(id).text
    
    // For cutting edge UX
    let newVal = window.prompt('', val);
    this.props.editTodo(id, newVal);
  }
 
  render() {
    const divStyle = {
      padding: '10px'
    };
    const todoStyleList = {
      float: 'right',
      marginRight: '300px',
      padding: '20px'
    };
    return (
      <div id="todo-lists" style={todoStyleList}>
          <p>Todo List:</p>
        {
          this.props.todos.map( (todo, index) => {
            return (
              <div key={index} style={divStyle}>
                <span>{todo}</span>
              
                <button data-id={index} onClick={this.handleDelete}>
                  X
                </button>
                <button data-id={index} onClick={this.handleEdit}>
                  Edit
                </button>
              </div>
            );
          })
        }
      </div>
    );
  }
}