import { useState, useRef, useEffect } from "react";

const Todo = ({ todo, toggleTodoComplete, removeTodo, addEditedTodo }) => {
	const [editState, setEditState] = useState(false);
	const [editedTask, setEditedTask] = useState(todo.task);
	const editInputRef = useRef();
	const beforeEditChache = todo.task;

	useEffect(() => {
		editInputRef.current.focus();
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		addEditedTodo(todo.id, editedTask);
		setEditState(false);
	};

	const handleOnBlur = () => {
		setEditedTask(beforeEditChache);
		setEditState(false);
	};

	const handleDoubleClick = () => {
		setEditState(true);
	};

	return (
		<li className="todo-item-container">
			<div className="todo-item">
				<input
					type="checkbox"
					checked={todo.isCompleted}
					onChange={() => toggleTodoComplete(todo.id)}
				/>
				<span
					className="todo-item-label"
					style={{
						textDecoration: todo.isCompleted ? "line-through" : "",
						display: editState ? "none" : "block",
					}}
					onDoubleClick={handleDoubleClick}
				>
					{todo.task}
				</span>
				<form onSubmit={handleSubmit}>
					<input
						style={{ display: editState ? "block" : "none" }}
						type="text"
						className="todo-item-input"
						value={editedTask}
						onChange={(e) => setEditedTask(e.target.value)}
						onBlur={handleOnBlur}
						ref={editInputRef}
					/>
				</form>
			</div>

			<button className="x-button" onClick={() => removeTodo(todo.id)}>
				<svg
					className="x-button-icon"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			</button>
		</li>
	);
};

export default Todo;
