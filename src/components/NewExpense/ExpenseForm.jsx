import React, { useState } from 'react';
import './ExpenseForm.css';

export default function ExpenseForm(props) {
	const [enteredTitle, setEnteredTitle] = useState('');
	const [enteredAmount, setEnteredAmount] = useState('');
	const [enteredDate, setEnteredDate] = useState('');

	const titleChangeHandler = (e) => {
		setEnteredTitle(e.target.value);
	};

	const amountChangeHandler = (e) => {
		setEnteredAmount(e.target.value);
	};

	const dateChangeHandler = (e) => {
		setEnteredDate(e.target.value);
	};

	const submitHandler = (e) => {
		e.preventDefault();
		const expenseData = {
			title: enteredTitle,
			amount: enteredAmount,
			date: new Date(enteredDate),
		};

		props.onSaveExpenseData(expenseData);

		setEnteredTitle('');
		setEnteredAmount('');
		setEnteredDate('');
	};

	return (
		<form onSubmit={submitHandler}>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label htmlFor=''>Title</label>
					<input
						type='text'
						value={enteredTitle}
						onChange={titleChangeHandler}
					/>
				</div>
				<div className='new-expense__control'>
					<label htmlFor=''>Amount</label>
					<input
						value={enteredAmount}
						type='number'
						min='0.1'
						step='0.1'
						onChange={amountChangeHandler}
					/>
				</div>
				<div className='new-expense__control'>
					<label htmlFor=''>Date</label>
					<input
						value={enteredDate}
						type='date'
						min='2020-01-01'
						max='2023-12-31'
						onChange={dateChangeHandler}
					/>
				</div>
			</div>
			<div className='new-expense__actions'>
				<button type='submit'>Add Expense</button>
			</div>
		</form>
	);
}
