import React from 'react';
import style from './ToDoItem.module.css';
import Draggable from 'react-draggable';

const ToDoItem = ({ item, setItem, items, setItems, index }) => {

	// Function that delete item
	const deleteItem = (id) => {
		setItems(items.filter((el) => el.id !== id));
	};

	// Position for elements
	const updatePos = (data, index) => {
		let newArr = [...items];
		newArr[index].defaultPos = { x: data.x, y: data.y };
		setItems(newArr)
	};

	return (
		<Draggable
			key={index}
			defaultPosition={item.defaultPos}
			onStop={(_, data) => {
				updatePos(data, index)
			}}
		>

			<div
				className={style.card}
				style={{
					backgroundColor: item.color,
				}}
			>

				{`${item.item}`}

				<button
					className={style['close-btn']}
					onClick={() => deleteItem(item.id)}
					onTouchStart={() => deleteItem(item.id)}
				></button>

			</div>

		</Draggable>
	)
};

export default ToDoItem;