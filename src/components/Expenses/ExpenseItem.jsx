import React, { useState } from 'react';
import './ExpenseItem.css';
import Card from '../UI/Card/Card';
import ExpenseDate from './ExpenseDate';

function ExpenseItem({ expense }) {
	const { date, amount } = expense;
	const [title, setTitle] = useState(expense.title);
	const buttonClickHandler = () => {
		setTitle('My New Title');
	};

	return (
		<>
			<Card className='expense-item'>
				<ExpenseDate date={date} />
				<div className='expense-item__description'>
					<h2>{title}</h2>
					<div className='expense-item__price'>${amount}</div>
				</div>
				<button onClick={buttonClickHandler}>Change Title</button>
			</Card>
		</>
	);
}

export default ExpenseItem;
