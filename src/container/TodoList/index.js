import React from 'react';
import { View } from 'react-native';
import Todo from '../../components/Todo';
/**
 * key 속성은 가상 DOM으로 diff가 구해지면서 바뀌게 되는 항목을 리액트가
 * 식별하는데 도움이 됩니다. key 속ㄱ성을 그대로 두면 리액트는 경고 메세지를 출력합니다.
 */

const TodoList = (props) => {
	const { todos, type, toggleComplete, deleteTodo } = props;
	const getVisibleTodos = (todos, type) => {
		switch (type) {
			case 'All':
				return todos;
			case 'Complete':
				return todos.filter((todo) => todo.complete);
			case 'Active':
				return todos.filter((todo) => !todo.complete);
		}
	};
	const todoList = getVisibleTodos(todos, type).map((todo, index) => {
		return <Todo key={index} todo={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />;
	});
	return <View>{todoList}</View>;
};

export default TodoList;
