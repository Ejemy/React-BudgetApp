import { modifyNum } from "../../../shared/utils/utilities.js";


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
