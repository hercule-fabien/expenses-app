import React from 'react';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import './Expenses.css';

function Expenses({ expenses }) {
	return (
		<div className='expenses'>
			<h2>Let's get started!</h2>
			{expenses.map((expense) => {
				return <ExpenseItem expense={expense} />;
			})}
		</div>
	);
}

export default Expenses;
