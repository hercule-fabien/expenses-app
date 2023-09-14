import ExpenseItem from '../ExpenseItem/ExpenseItem';
import './Expenses.css';
import Card from '../Card/Card';

function Expenses({ expenses }) {
	return (
		<Card className='expenses'>
			{expenses.map((expense) => {
				return <ExpenseItem expense={expense} />;
			})}
		</Card>
	);
}

export default Expenses;
