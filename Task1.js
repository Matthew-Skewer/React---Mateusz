import ExpenseItem from './ExpenseItem';
import './ExpenseItem.css'
import './Task1.css'

function Task1(props){
    return ( <div className="expenses">
    <ExpenseItem
      title={props.expenses[0].title}
      amount={props.expenses[0].amount}
      date={props.expenses[0].date}
    />
    <ExpenseItem
      title={props.expenses[1].title}
      amount={props.expenses[1].amount}
      date={props.expenses[1].date}
    />
    <ExpenseItem
      title={props.expenses[2].title}
      amount={props.expenses[2].amount}
      date={props.expenses[2].date}
    />

    <ExpenseItem
      title={props.expenses[3].title}
      amount={props.expenses[3].amount}
      date={props.expenses[3].date}
    />
    </div>)
}

export default Task1;