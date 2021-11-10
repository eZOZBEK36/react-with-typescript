import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';
import { InterfaceTodos } from '../Interfaces';
import React, { useEffect, useState } from 'react';

declare var confirm: (question: string) => boolean;

const TodosPage: React.FC = () => {
	const [todos, setTodos] = useState<InterfaceTodos[]>([]);
	const addHandler = (title: string) => {
		const newTodo: InterfaceTodos = {
			title: title,
			id: Date.now(),
			completed: false,
		};
		setTodos(prev => [...prev, newTodo]);
	};
	const toggleHandler = (id: number) => {
		setTodos(prev =>
			prev.map(todo => {
				if (todo.id === id) todo.completed = !todo.completed;
				return todo;
			}),
		);
	};
	const removeHandler = (id: number) => {
		const confirmation = confirm('Are you sure delete');
		if (confirmation) setTodos(prev => prev.filter(todo => todo.id !== id));
	};
	useEffect(() => {
		const saved = JSON.parse(
			localStorage.getItem('todos') || '[]',
		) as InterfaceTodos[];
		setTodos(saved);
	}, []);
	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);
	return (
		<>
			<TodoForm onAdd={addHandler} />
			<TodoList
				todos={todos}
				onToggle={toggleHandler}
				onRemove={removeHandler}
			/>
		</>
	);
};

export default TodosPage;
