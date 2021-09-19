import { useState } from "react";
import Todo from "./Todo";
import TodoButtons from "./TodoButtons";

const TodoList = ({
	todos,
	toggleTodoComplete,
	checkAll,
	removeTodo,
	clearCompleted,
	addEditedTodo,
}) => {
	const [filter, setFilter] = useState("all");
	const todosFiltered = () => {
		if (filter === "all") {
			return todos;
		} else if (filter === "active") {
			return todos.filter((todo) => !todo.isCompleted);
		} else if (filter === "completed") {
			return todos.filter((todo) => todo.isCompleted);
		} else {
			return todos;
		}
	};
	return (
		<ul className="todo-list">
			{todosFiltered().map((todo) => {
				return (
					<Todo
						key={todo.id}
						todo={todo}
						toggleTodoComplete={toggleTodoComplete}
						removeTodo={removeTodo}
						addEditedTodo={addEditedTodo}
					/>
				);
			})}
			<TodoButtons
				todos={todos}
				checkAll={checkAll}
				clearCompleted={clearCompleted}
				filter={filter}
				setFilter={setFilter}
				todosFiltered={todosFiltered}
			/>
		</ul>
	);
};

export default TodoList;
