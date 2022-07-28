import React, { useState } from 'react'

import './NewExpense.css'
import NewExpenseForm from './NewExpenseForm'

export default function NewExpense(props) {

  const [toggleDisplay, setToggleDisplay] = useState(false);

  const addExpenseHandler = (expenseAdded) => {
    expenseAdded.id = Math.random();
    props.onAddExpense(expenseAdded);
  }

  const toggleDisplayeHandler = () => {
    setToggleDisplay(prevFlag => !prevFlag);
  }


  return (
    <div className='new-expense'>
      {toggleDisplay && <NewExpenseForm onDisplayHandler={toggleDisplayeHandler} onSubmitExpense={addExpenseHandler} />}
      {!toggleDisplay && <button onClick={ toggleDisplayeHandler } >Add new expense</button>}
    </div>
  )
}
