import {TransactionCategory} from "./TransactionCategory";


function Row({
    index,
    data,
    transaction,
    budget,
    save,
    checkValue
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
            if (save) {
              //handleChange(event.target.value, savedate)
            }
          }}
  
        />
        <input
          placeholder="Memo"
          className="trans-name"
          value={data.description}
          onChange={(event) => {
            if (save) {
              //handleChange(event.target.value, savememo)
            }
          }}
        />
        <TransactionCategory
          categories={budget}
          data={data.category}
  
          change={(event) => {
            if (save) {
              //handleChange(event.target.value, savedata)
            }
          }}
        />
        <input
          placeholder="Expenditure"
          className="expend"
          value={"¥" + data.expense.toLocaleString()}
          onChange={(event) => {
            if (save) {
              //handleChange(event.target.value, saveexpend)
            }
          }}
        />
        <input
          placeholder="Income"
          className="income"
          value={"¥" + data.income.toLocaleString()}
          onChange={(event) => {
            if (save) {
              //handleChange(event.target.value, saveincome)
            }
          }}
        />
        
      </div>
    );
  }


  export { Row }