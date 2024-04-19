import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
    const { budget } = useContext(AppContext);
    /*
    use useState() hook to create a state variable , 
    and inti it with current value of budget
    */
    const [newBudget, setNewBudget] = useState(budget);

    // updates the value of newBudget
    const handelBudgetChange = (event) => {
        setNewBudget(event.target.value);
    }

    return (
        <div className="alert alert-secondary">
            <span>Budget: £{budget}</span>
            <input type="number" step="10" value={newBudget} onChange={handelBudgetChange} />
        </div>
    )
}

export default Budget;