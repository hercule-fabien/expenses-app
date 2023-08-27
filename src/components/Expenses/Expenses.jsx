import ExpenseItem from '../ExpenseItem/ExpenseItem';
import './Expenses.css';

function Expenses({ expenses }) {
	return (
		<div className='expenses'>
			{expenses.map((expense) => {
				return <ExpenseItem expense={expense} />;
			})}
		</div>
	);
}

export default Expenses;
