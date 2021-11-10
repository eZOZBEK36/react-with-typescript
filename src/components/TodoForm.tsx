import React, { useState } from 'react';

interface TodoFormProps {
	onAdd(title: string): void;
}

const TodoForm: React.FC<TodoFormProps> = props => {
	const [title, setTitle] = useState<string>('');
	return (
		<div className='input-field mt2'>
			<input
				id='title'
				type='text'
				value={title}
				placeholder='Enter todo name'
				onKeyPress={(e: React.KeyboardEvent) => {
					if (e.key === 'Enter') {
						props.onAdd(title);
						setTitle('');
					}
				}}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
					setTitle(e.target.value);
				}}
			/>
			<label htmlFor='title' className='active'>
				Enter todo name
			</label>
		</div>
	);
};

export default TodoForm;
