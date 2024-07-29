import { modifyNum } from "../../../shared/utils/utilities.js";

export const handleSavingsAmountInput = (event, savings, id) => {
  console.log(savings)
  const tempSavings = savings.slice();
  for (let i = 0; i < tempSavings.length; i++) {
    if (tempSavings[i].id === id) {
      const arr = [...event.target.value];
      const filterArr = [];
      const boxstr = modifyNum(arr, filterArr);
      const str = boxstr.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      event.target.value = "¥" + str;

      tempSavings[i].savingsamount = parseFloat(boxstr);
    
      //calculateTotal(tempSavings, nextBudgetVal);
    }
  }
  return tempSavings;
};

export const handleSavingsName = (event, index, savings) => {

  const tempSavings = savings.slice();
  tempSavings[index].category = event.target.value
  console.log("SAVINGS", tempSavings)
  return tempSavings;
};


export const calculateSavingsTotals = (savings, transactions) => {
  let total = 0;
  console.log("CAL", savings, transactions)
  for(let i in transactions){
    if(transactions[i].category === savings.category && savings.category !== ""){
      total -= transactions[i].expense;
      total += transactions[i].income;
    } 
  }
  return total;
}