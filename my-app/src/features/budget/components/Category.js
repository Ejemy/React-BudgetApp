import { amountRemainingColor, amountRemainingInBudgetCategory } from "../utils/utilities";
import { addComas } from "../../../shared/utils/utilities";

function CategoryAmount({ parentCallback, idval, val, id }) {
    return (
      <input
        className="categorybox"
        placeholder="Budgeted"
        id="categoryamount"
        value={"¥" + addComas(val.toString())}
        onChange={(event) => parentCallback(event, idval, id)}
      />
    );
  }

  
  function CategoryName({ categname, idval, val, id, checkValue, budget }) {
    return (
      <div className="category">
        <input type="checkbox" id={idval} value="checked" checked={val.check} className="checkbox" onChange={(event) => checkValue(event, budget)} />
        <input
          placeholder="Category"
          className="category-name"
          value={val.category}
          onChange={(event) => categname(event, idval, budget)}
        />
      </div>
    );
  }


  function AmountBox({ budgetItem, Spent, transaction, calcP, pd }) {
      
    return (
      <div className="amount-children" id="amountbox" style={{ color: amountRemainingColor(transaction, budgetItem) }}>
        ¥{amountRemainingInBudgetCategory(transaction, budgetItem)}
      </div>
    );
  }


  export {CategoryAmount, CategoryName, AmountBox};