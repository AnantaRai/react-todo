import { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./reset.css";
import "./App.css";

const App = () => {
	const [todos, setTodos] = useState([]);
	const addTodo = (todo) => {
		setTodos([todo, ...todos]);
	};
	const toggleTodoComplete = (id) => {
		setTodos(
			todos.map((todo) => {
				if (todo.id === id) {
					return {
						...todo,
						isCompleted: !todo.isCompleted,
					};
				} else {
					return todo;
				}
			})
		);
	};
	const checkAll = () => {
		if (todos.filter((todo) => todo.isCompleted).length === todos.length) {
			setTodos(
				todos.map((todo) => {
					return {
						...todo,
						isCompleted: false,
					};
				})
			);
		} else {
			setTodos(
				todos.map((todo) => {
					if (!todo.isCompleted) {
						return {
							...todo,
							isCompleted: !todo.isCompleted,
						};
					} else {
						return todo;
					}
				})
			);
		}
	};

	const removeTodo = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	const clearCompleted = () => {
		setTodos(todos.filter((todo) => !todo.isCompleted));
	};

	const addEditedTodo = (id, task) => {
		if (task.trim().length > 0) {
			setTodos(
				todos.map((todo) => {
					if (todo.id === id) {
						return {
							...todo,
							task: task,
						};
					} else {
						return todo;
					}
				})
			);
		}
	};

	return (
		<div className="todo-app-container">
			<div className="todo-app">
				<h2>Todo App</h2>
				<TodoForm addTodo={addTodo} />
				<TodoList
					todos={todos}
					toggleTodoComplete={toggleTodoComplete}
					checkAll={checkAll}
					removeTodo={removeTodo}
					clearCompleted={clearCompleted}
					addEditedTodo={addEditedTodo}
				/>
			</div>
		</div>
	);
};

export default App;
