import './App.css';
import AddTransactions from './components/AddTransactions';
import Balance from './components/Balance';
import Header from './components/Header';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';

function App() {
  return (
    <>
      <Header/>
      <div className='container'>
        <Balance/>
        <IncomeExpenses/>
        <TransactionList/>
        <AddTransactions/>
      </div>
    </>
  );
}

export default App;
