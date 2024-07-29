import logo from "./assets/logo.svg";
import "./styles/App.css";

import { Budget } from "./features/budget/components/Budget.js";
import { Row } from "./features/transactions/components/Row.js";
import { Savings } from "./features/savings/components/Savings.js"
import { Delete, AddButton } from "./shared/components/SharedComponents.js"

import { useState, useEffect, useCallback } from "react";
import {
  handleCategoryName,
  handleBudgetAmountInput,
} from "./features/budget/utils/utilities.js";
import setState from "./shared/utils/setState.js";
import { newItem, deleteItem, checkValue } from "./shared/utils/utilities.js";
import { handleSavingsAmountInput, handleSavingsName } from "./features/savings/utils/utilities.js";
import { handleTransactionChange } from "./features/transactions/utils/utilities.js";

export default function App() {
  const date = new Date();

  const [budget, setBudget] = useState(
    Array({
      id: "abc123",
      category: "",
      budgetamount: 0,
      spentamount: 0,
      date: date.toISOString(),
      check: false,
    })
  );

  //budgeted total i think
  const [total, setTotal] = useState(0);

  const [transaction, setTransaction] = useState(
    Array({
      id: "123abc",
      description: "",
      date: date.toISOString(),
      category: "",
      expense: 0,
      income: 0,
      check: false
    })
  );

  const [firstload, setFirstload] = useState(true);
  const [deleteBool, setDeletebool] = useState([false, []]);

  const [savings, setSavings] = useState(
    Array({
      id: "1a2b3c",
      category: "",
      savingsamount: 0,
      total: 0,
      date: date.toISOString(),
      check: false,
    })
  );

  const [toggleDiv, setToggleDiv] = useState({
    auto: false,
    transaction: false,
    budget: true,
    savings: false,
    charts: 0,
  });
  const [toggleLock, setToggleLock] = useState(true);
  const [passcode, setPasscode] = useState("");

  const [statistics, setStatistics] = useState({});


  useEffect(() => {
    console.log("STATE CHECK")
    console.log("budget", budget)
    console.log("savings", savings)
    console.log("transaction", transaction)
  })

  return (
    <div className="App">
      <Delete
        deleteItem={(e) => {
          setState(deleteItem(e, budget), setBudget);
          setState(deleteItem(e, transaction), setTransaction);
          setState(deleteItem(e, savings), setSavings);
        }
        }
      />
      <div className="budget">
      <h1>Budget</h1>

        <AddButton
          newItem={() => setState(newItem(budget), setBudget)}
        />
        {budget.map((value, index) => (
          <Budget
            budgetItem={value}
            index={index}
            handleCategoryName={(x, y, z) =>
              setState(handleCategoryName(x, y, z), setBudget)
            }
            handleInput={(x, y, z) =>
              setState(handleBudgetAmountInput(x, y, z), setBudget)
            }
            budget={budget}
            tran={transaction}
            key={index}
            checkValue={(event) => setState(checkValue(event, budget), setBudget)}
          />
        ))}
      </div>
      <div className="transactions">
      <h1>Transactions</h1>

        <AddButton
          newItem={() => setState(newItem(transaction), setTransaction)}
        />
        {transaction.map((event, index) => (
          <Row
            index={index}
            data={event}
            transaction={transaction}
            budget={budget}
            savings={savings}
            key={index}
            checkValue={(event) => setState(checkValue(event, transaction), setTransaction)}
            handleTransactionChange={(w, x, y, z) => setState(handleTransactionChange(w, x, y, z), setTransaction)}

          />
        ))}
      </div>
      <div className="savings">
      <h1>Savings</h1>

        <AddButton
          newItem={() => setState(newItem(savings), setSavings)}
        />
        {savings.map((value, index) => (
          <Savings
            savingsItem={value}
            index={index}
            savingsCallback={(x, y, z) => setState(handleSavingsAmountInput(x, y, z), setSavings)}
            savingsname={(x, y, z) => setState(handleSavingsName(x, y, z), setSavings)}
            savings={savings}
            checkValue={(event) => setState(checkValue(event, savings), setSavings)}
            transactions={transaction}

          />
        ))}
      </div>
    </div>
  );
}
