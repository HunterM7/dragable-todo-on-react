import React, { useState, useEffect } from 'react';
import './App.css';
import { v4 } from 'uuid';
import randomColor from 'randomcolor';
import ToDoItem from './Components/ToDoItem/ToDoItem';

function App() {

	// Work with State
	const [item, setItem] = useState('');
	const [items, setItems] = useState(
		JSON.parse(localStorage.getItem('items')) || []
	);

	useEffect(() => {
		localStorage.setItem('items', JSON.stringify(items))
	}, [items]);

	// Function for adding new item
	const newItem = () => {
		if (item.trim() !== '') {
			const newItem = {
				id: v4(),
				item,
				color: randomColor({
					luminosity: 'light',
				}),
				defaultPos: {
					x: -100,
					y: -100,
				},
			};
			setItems(items => [...items, newItem]);
			setItem('');
		}
	}



	return (
		<div className="App">

			<div className="wrapper">

				<input
					className='input'
					type='text'
					placeholder='Enter Something'
					value={item}
					onChange={e => setItem(e.target.value)}
					onKeyDown={e => e.key === 'Enter' && newItem()}
				/>

				<button
					className='btn'
					onClick={newItem}
				>
					Enter
				</button>

			</div>

			{
				items.map((item, index) => {
					return (
						<ToDoItem
							item={item}
							setItem={setItem}
							items={items}
							setItems={setItems}
							index={index}
						/>
					)
				})
			}

		</div>
	);
}

export default App;