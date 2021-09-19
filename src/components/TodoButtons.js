const TodoButtons = ({
	todos,
	checkAll,
	clearCompleted,
	filter,
	todosFiltered,
	setFilter,
}) => {
	return (
		<>
			<div className="check-all-container">
				<div>
					<div className="button" onClick={checkAll}>
						Check All
					</div>
				</div>

				<span style={{ display: filter === "completed" ? "none" : "block" }}>
					{todosFiltered().filter((todo) => !todo.isCompleted).length} items
					remaining
				</span>
			</div>

			<div className="other-buttons-container">
				<div>
					<button
						className={
							"button filter-button " +
							(filter === "all" ? "filter-button-active" : " ")
						}
						onClick={() => setFilter("all")}
					>
						All
					</button>
					<button
						className={
							"button filter-button " +
							(filter === "active" ? "filter-button-active" : "")
						}
						onClick={() => setFilter("active")}
					>
						Active
					</button>
					<button
						className={
							"button filter-button " +
							(filter === "completed" ? "filter-button-active" : "")
						}
						onClick={() => setFilter("completed")}
					>
						Completed
					</button>
				</div>
				<div>
					<button
						className="button"
						style={{
							display:
								todos.filter((todo) => todo.isCompleted).length > 0
									? "block"
									: "none",
						}}
						onClick={clearCompleted}
					>
						Clear completed
					</button>
				</div>
			</div>
		</>
	);
};

export default TodoButtons;
