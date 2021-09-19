import React, { useState } from "react";
import shortid from "shortid";

const TodoForm = ({ addTodo }) => {
	const [todo, setTodo] = useState({
		id: "",
		task: "",
		isCompleted: false,
	});
	const handleTaskInputChange = (e) => {
		setTodo({ ...todo, task: e.target.value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		const { task } = todo;
		if (task.trim().length > 0) {
			addTodo({ ...todo, id: shortid.generate() });
			setTodo({ ...todo, task: "" });
		}
	};
	return (
		<>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					className="todo-input"
					placeholder="Todos goes here..."
					value={todo.task}
					onChange={handleTaskInputChange}
				/>
			</form>
		</>
	);
};

export default TodoForm;
