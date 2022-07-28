import React, { useState } from 'react';

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';


const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 2, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 14) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 14),
  },
];


const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  const onAddExpenseHandler = (newExpense) => {
    setExpenses((prevExpenses) => [newExpense, ...prevExpenses]);
  }

  // const onFilterHandler = (year) => {
  //   console.log(year);
  //   setExpenses((prevExpenses) => {
  //     return expenses.filter(e => e.date.getFullYear() === Number(year));
  //   });
  // }

  return (
    <div>
      <NewExpense onAddExpense={onAddExpenseHandler}></NewExpense>
      <Expenses  items={expenses} />
    </div>
  );
}

export default App;
