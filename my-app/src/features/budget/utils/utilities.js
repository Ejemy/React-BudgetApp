import { modifyNum } from "../../../shared/utils/utilities.js";
import { calculatePayperiod } from "../../../shared/utils/utilities.js";

export const handleCategoryName = (event, id, budget) => {
  console.log("budget", id, budget);
  const nextBudget = budget.slice();
  for (let i = 0; i < nextBudget.length; i++) {
    if (nextBudget[i].id === id) {
      nextBudget[i].category = event.target.value;
    }
  }
  return nextBudget;
};



export const handleBudgetAmountInput = (event, budget, id) => {
  const nextBudgetVal = budget.slice();
  let val = event.target.value;
  for (let i = 0; i < nextBudgetVal.length; i++) {
    if (nextBudgetVal[i].id === id) {
      const arr = [...val];
      const filterArr = [];
      const boxstr = modifyNum(arr, filterArr);
      const str = boxstr.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      event.target.value = "¥" + str;
      nextBudgetVal[i].budgetamount = parseFloat(boxstr);
    }
  }

  //calculateAndDisplaySpent(nextBudgetVal, tempSavings);
  return nextBudgetVal;
  //calculateTotal(tempSavings, nextBudgetVal);
};


//   // Calculating SPENT in budget
//   calculateSpentandSetBV(nextBudgetVal, nextTransaction);
//   setSavings(tempSavings);
//   setAutotrans(tempAuto);
// }

export const amountRemainingColor = (transaction, budgetItem) => {
  let defaultColor = "black";
  const left = amountRemainingInBudget(transaction, budgetItem)
  if (left < 0) {
    defaultColor = "red"
  } else {
    defaultColor = "black"
  }
  return defaultColor;
}


export const amountRemainingInBudget = (transaction, budgetItem) => {
  let realSpent = 0;
  for (let x in transaction) {
    if (transaction[x].category === budgetItem.category) {
      if (transaction[x].expense > 0 && calculatePayperiod(transaction[x])) {
        realSpent += transaction[x].expense
      } else if (transaction[x].expense > 0 && budgetItem.persist === true) {
        realSpent += transaction[x].expense
        if (transaction[x].income > 0) {
          realSpent -= transaction[x].income
        }
      }
    }
    const left = budgetItem[2] - realSpent
    return left;
  }
}
