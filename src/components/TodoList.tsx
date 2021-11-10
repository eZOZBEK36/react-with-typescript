import React from 'react';
import { InterfaceTodos } from '../Interfaces';

type TodoListProps = {
	todos: InterfaceTodos[];
	onToggle(id: number): void;
	onRemove: (id: number) => void;
};

const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onRemove }) => {
	return (
		<ul>
			{todos.map(todo => {
				return (
					<li
						key={todo.id}
						className={todo.completed ? 'todo completed' : 'todo'}>
						<label>
							<input
								type='checkbox'
								checked={todo.completed}
								onChange={() => onToggle(todo.id)}
							/>
							<span>{todo.title}</span>
							<i
								onClick={(e: React.MouseEvent) => {
									e.preventDefault();
									onRemove(todo.id);
								}}
								className='material-icons red-text'>
								delete
							</i>
						</label>
					</li>
				);
			})}
		</ul>
	);
};

export default TodoList;
