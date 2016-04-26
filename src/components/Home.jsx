import React                  from 'react';
import TodosView              from 'components/TodosView';
import TodosForm              from 'components/TodosForm';
import { bindActionCreators } from 'redux';
import * as TodoActions       from 'actions/TodoActions';
import { connect }            from 'react-redux';

@connect(state => ({ todos: state.todos }))

export default class Home extends React.Component {
  render() {
    const { todos, dispatch } = this.props;
    const todoStyle = {
      border: '1px solid #ccc',
      clear: 'both',
      content: '',
      display: 'inline-block',
      width: '100%'
    };
    return (
      <div id="todo-list" style={todoStyle}>
        <TodosView todos={todos} 
          {...bindActionCreators(TodoActions, dispatch)} />
        <TodosForm
          {...bindActionCreators(TodoActions, dispatch)} />
      </div>
    );
  }
}