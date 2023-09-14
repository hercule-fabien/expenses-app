import React from 'react';
import './ExpenseItem.css';
import Card from '../UI/Card/Card';
import ExpenseDate from './ExpenseDate';

function ExpenseItem({ expense }) {
	const { date, title, amount } = expense;

	return (
		<>
			<Card className='expense-item'>
				<ExpenseDate date={date} />
				<div className='expense-item__description'>
					<h2>{title}</h2>
					<div className='expense-item__price'>${amount}</div>
				</div>
			</Card>
		</>
	);
}

export default ExpenseItem;
