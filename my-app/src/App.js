import logo from "./assets/logo.svg";
import "./styles/App.css";

import { Budget } from "./features/budget/components/Budget.js";
import { Row } from "./features/transactions/components/Row.js";
import { Savings } from "./features/savings/components/Savings.js"
import { useState, useEffect, useCallback } from "react";
import {
  handleCategoryName,
  handleBudgetAmountInput,
} from "./features/budget/utils/utilities.js";
import setState from "./shared/utils/setState.js";
import { handleSavingsAmountInput, handleSavingsName } from "./features/savings/utils/utilities.js";

export default function App() {
  const date = new Date();

  const [budget, setBudget] = useState(
    Array({
      id: "abc123",
      category: "",
      budgetamount: 0,
      spentamount: 0,
      date: date,
      persist: false,
    })
  );

  //budgeted total i think
  const [total, setTotal] = useState(0);

  const [transaction, setTransaction] = useState(
    Array({
      id: "123abc",
      description: "",
      date: "",
      category: "",
      expense: 0,
      income: 0,
    })
  );

  const [firstload, setFirstload] = useState(true);
  const [deleteBool, setDeletebool] = useState([false, []]);

  const [savings, setSavings] = useState(
    Array({
    id: "1a2b3c",
    description: "",
    savingsamount: 0,
    total: 0,
    type: "savings",
    datestamp: date,
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
  const [transactionSave, setTransactionSave] = useState([
    "",
    "",
    "",
    "",
    0,
    0,
  ]);
  const [statistics, setStatistics] = useState({});

  return (
    <div className="App">
      <div className="budget">
        {budget.map((value, index) => (
          <Budget
            value={value}
            index={index}
            //handleDelete={handleDelete}
            handleCategoryName={(x, y, z) =>
              setState(handleCategoryName(x, y, z), setBudget)
            }
            handleInput={(x, y, z) =>
              setState(handleBudgetAmountInput(x, y, z), setBudget)
            }
            budget={budget}
            tran={transaction}
            //calcP={calculatePayperiod}
            //checkPersist={(x, y) => checkPersist(x, y)}
            key={index}
          />
        ))}
      </div>
      <div className="transactions">
        {transaction.map((event, index) => (
          <Row
            index={index}
            data={event}
            tran={transaction}
            budget={budget}
            //handleDate={(x, y, z) => handleDate(x, y, z)}
            //handleDelete={handleDelete}
            key={index}
          />
        ))}
      </div>
      <div className="savings">
        {savings.map((value, index) => (
          <Savings
            data={value}
            index={index}
            //handleDelete={handleDelete}
            savingsCallback={(x, y, z) => setState(handleSavingsAmountInput(x, y, z), setSavings)}
            savingsname={(x, y, z) => setState(handleSavingsName(x, y, z), setSavings)}
            savings={savings}
          />
        ))}
      </div>
    </div>
  );
}
