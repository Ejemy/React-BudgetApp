import { CategoryAmount, CategoryName, AmountBox } from "./Category.js";

function Budget({
    value,
    index,
    handleCategoryName,
    handleInput,
    handleDelete,
    budget,
    tran,
    calcP,
    settings,
    checkPersist
  }) {
    return (
      <div className="row-budget">
        <div className="categorydiv">
          <CategoryName
            key={index}
            idval={index}
            val={value}
            id={value.id}
            categname={(eventData) => {
              handleCategoryName(eventData, value.id, budget);
            }}
            checkPersist={(event) => {
              checkPersist(event, value)
            }}
          />
        </div>
        <div className="categoryamount" id="inputamount">
          <CategoryAmount
            key={index}
            idval={index}
            val={value.budgetamount}
            id={value.id}
            parentCallback={(event) => handleInput(event, budget, value.id)}
          />
        </div>
        <div className="amount-box" id="amountdiv">
          <AmountBox
            key={index}
            idval={index}
            Numvalue={value}
            Spent={value.spentamount}
            trans={tran}
            calcP={calcP}
            pd={settings}
          />
        </div>
        {/* <div className="deleteCat">
          <Delete
            value={value}
            index={index}
            key={index}
            id={value[0]}
            callback={(stuff) => {
              handleDelete(stuff, index, value[0]);
            }}
            boxv={box}
          />
        </div> */}
      </div>
    );
  }


  export { Budget }
  