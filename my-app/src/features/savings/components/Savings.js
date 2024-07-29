import { calculateSavingsTotals } from "../utils/utilities";

function Savings({
    savingsItem,
    index,
    handleDelete,
    newItem,
    savingsCallback,
    savingsname,
    savings,
    checkValue,
    transactions
  }) {
    return (
      <div className="row-savings">
        <input type="checkbox" id={index} value="checked" checked={savingsItem.check} className="checkbox" onChange={(event) => checkValue(event, savings)} />
        <input
          className="savings-name"
          placeholder="Savings Account Name"
          value={savingsItem.description}
          onChange={(event) => savingsname(event, index, savings)}
        />
        
        <div className="savings-total">
          {"¥" +
            (calculateSavingsTotals(savingsItem, transactions)).toString()}
        </div>
        {/* <Delete
          value={savingsItem}
          index={index}
          key={index}
          id={savingsItem[0]}
          savingsDelcallback={(event) => handleDelete(event, index, savingsItem[0])}
          sav={sav}
        /> */}
      </div>
    );
  }

  export {Savings}