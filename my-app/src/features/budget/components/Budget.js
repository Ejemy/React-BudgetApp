import { CategoryAmount, CategoryName, AmountBox } from "./Category.js";

function Budget({
    budgetItem,
    index,
    handleCategoryName,
    handleInput,
    handleDelete,
    budget,
    tran,
    calcP,
    settings,
    checkValue
  }) {
    return (
      <div className="row-budget">
        <div className="categorydiv">
          <CategoryName
            key={index}
            idval={index}
            val={budgetItem}
            id={budgetItem.id}
            categname={(eventData) => {
              handleCategoryName(eventData, budgetItem.id, budget);
            }}
            checkValue={(event) => {
              checkValue(event, budget)
            }}
          />
        </div>
        <div className="categoryamount" id="inputamount">
          <CategoryAmount
            key={index}
            idval={index}
            val={budgetItem.budgetamount}
            id={budgetItem.id}
            parentCallback={(event) => handleInput(event, budget, budgetItem.id)}
          />
        </div>
        <div className="amount-box" id="amountdiv">
          <AmountBox
            key={index}
            idval={index}
            budgetItem={budgetItem}
            Spent={budgetItem.spentamount}
            trans={tran}
            calcP={calcP}
            pd={settings}
          />
        </div>
        {/* <div className="deleteCat">
          <Delete
            value={budgetItem}
            index={index}
            key={index}
            id={budgetItem[0]}
            callback={(stuff) => {
              handleDelete(stuff, index, budgetItem[0]);
            }}
            boxv={box}
          />
        </div> */}
      </div>
    );
  }


  export { Budget }
  