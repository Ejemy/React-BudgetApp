import {TransactionCategory} from "./TransactionCategory";
import { modifyNum, addComas } from "../../../shared/utils/utilities.js";



function Row({
    index,
    data,
    transaction,
    budget,
    checkValue,
    handleTransactionChange,
    savings
  }) {
    return (
      <div className="row-transaction" id={index}>
        <input type="checkbox" id={index} value="checked" defaultChecked={data.check} className="checkbox" onClick={(event) => checkValue(event, transaction)} />
        <input
          placeholder="Date"
          className="date"
          type="date"
          value={data.date.toString().slice(0, 10)}
          onChange={(event) => {
              handleTransactionChange(transaction, data, event.target.value, "date")
          }}
  
        />
        <input
          placeholder="Memo"
          className="trans-name"
          value={data.description}
          onChange={(event) => {
              handleTransactionChange(transaction, data, event.target.value, "description")
          }}
        />
        <TransactionCategory
          budget={budget}
          index={index}
          savings = {savings}
          change={(event) => {
            handleTransactionChange(transaction, data, event.target.value, "category")

          }}
        />
        <input
          placeholder="Expenditure"
          className="expend"
          value={"¥" + addComas(modifyNum(data.expense).toLocaleString())}
          onChange={(event) => {
            handleTransactionChange(transaction, data, event.target.value, "expense")

          }}
        />
        <input
          placeholder="Income"
          className="income"
          value={"¥" + addComas(modifyNum(data.income).toLocaleString())}
          onChange={(event) => {
            handleTransactionChange(transaction, data, event.target.value, "income")

          }}
        />
        
      </div>
    );
  }


  export { Row }