import { amountRemainingColor, amountRemainingInBudget } from "../utils/utilities";

function CategoryAmount({ parentCallback, idval, val, id }) {
    return (
      <input
        className="categorybox"
        placeholder="Budgeted"
        id="categoryamount"
        value={"¥" + val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
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
        ¥{amountRemainingInBudget(transaction, budgetItem)}
      </div>
    );
  }


  export {CategoryAmount, CategoryName, AmountBox};