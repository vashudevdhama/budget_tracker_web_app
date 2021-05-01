import React from 'react';
import DatePicker from './DatePicker/DatePicker';

function LeftSide(){
    const [income, setIncome] = React.useState(0);
    const [expenseCat, setExpenseCat] = React.useState('');

    const handleIncomeChange = (value) => {
        setIncome(value);
    }
    const handleIncomeSubmit = (e) => {
        e.preventDefault();
        console.log(`Income: Rs. ${income} submit to DB.`)
    }
    const handleExpenseCatSelect = (value) => {
        setExpenseCat(value);
    }

    React.useEffect(()=>{
        console.log(`Income: Rs. ${income} reflexted.`)
    }, [income])
    React.useEffect(()=>{
        console.log(`Expense Cat: ${expenseCat}.`)
    }, [expenseCat])

    return(
        <div className="left">
            <div className="left-container">
                <DatePicker />
                <form className="income-form">
                    <label htmlFor="income">Income</label>
                    <input type="number" name="income" id="income" className="income" onChange={(e)=>handleIncomeChange(e.target.value)}/>
                    <input type="submit" value="Submit" onClick={(e)=>handleIncomeSubmit(e)}></input>
                </form>
                
                <form className="expense-form">
                    <label htmlFor="expense-category">Expense Category</label>
                    <select name="expense-cat" id="expense-category" onChange={(e)=>handleExpenseCatSelect(e.target.value)}>
                        <option value="household">Household</option>
                        <option value="bill">Bill payment</option>
                        <option value="travel">Travel</option>
                        <option value="food">Food</option>
                    </select>
                    <input type="text" placeholder={expenseCat}/>
                </form>

            </div>
        </div>
    )
}

export default LeftSide;