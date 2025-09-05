import { useState } from 'react'
import './App.css'

function App() {
  const [expenses, setExpenses] = useState([]);
  const [reason, setReason] = useState('');
  const [cost, setCost] = useState('');

  const handleAddExpense = () => {
    if (reason && cost && !isNaN(cost)) {
      setExpenses([...expenses, { reason, cost: parseFloat(cost) }]);
      setReason('');
      setCost('');
    }
  };

  return (
    <>
      <div>
        <h1>Track Expense</h1>
        <input
          type="text"
          value={reason}
          onChange={e => setReason(e.target.value)}
          placeholder="Enter a reason"
        />
        <input
          type="number"
          value={cost}
          onChange={e => setCost(e.target.value)}
          placeholder="Enter a cost"
        />
        <button onClick={handleAddExpense}>Add Expense</button>
        <ul>
          {expenses.map((exp, idx) => (
            <li key={idx}>
              {exp.reason}: ₹{exp.cost}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App