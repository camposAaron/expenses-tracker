import React, { useState } from 'react'
import './NewExpenseForm.css'

export default function NewExpenseForm(props) {

  const [enteredTitle, setEnteredTitle ] = useState('');
  const [enteredAmount, setEnteredAmount ] = useState('');
  const [enteredDate,   setEnteredDate ] = useState('');

  // const [inputUser, setInputUser] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // })

  const titleChangedHandler = (e) => {
    setEnteredTitle(e.target.value);

    // setInputUser({
    //   ...userInput,
    //   enteredTitle : e.targe.value
    // });

    // setInputUser((prevState)=> {
    //   return { ...prevState,  enteredTitle : e.target.value} 
    // });
  }

  const amountChangedHandler = (e) => {
    setEnteredAmount(e.target.value);
  }

  const dateChangedHandler = (e) => {
    setEnteredDate(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    
    let newExpense = {
      title : enteredTitle,
      amount : +enteredAmount,
      date : new Date(enteredDate), 
    }

    props.onSubmitExpense(newExpense);

    setEnteredTitle('')
    setEnteredAmount('')
    setEnteredDate('')

    props.onDisplayHandler();
  }

  return (
    <form onSubmit={ submitHandler }>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangedHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type="number" value={enteredAmount} onChange={amountChangedHandler} min='0.01' step='0.01' />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type="date" value={enteredDate} onChange={dateChangedHandler} min='2019-01-01' max='2023-12-31' />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={ props.onDisplayHandler } >Cancel</button>
        <button type='submit'>Add expense</button>
      </div>
    </form>
  )
}
