import {TransactionCategory} from "./TransactionCategory";
import {Delete} from "../../../shared/components/Delete";


function Row({
    index,
    data,
    tran,
    budget,
    //handleDelete,
    //handleChange,
    save
  }) {
    let checkifsave;
    let savedate;
    let savememo;
    let savedata;
    let saveexpend;
    let saveincome;
    let savenone;
    if (save) {
      checkifsave = "savediv";
      savedate = "savedate";
      savememo = "savememo";
      savedata = "savedata";
      saveexpend = "saveexpend";
      saveincome = "saveincome";
      savenone = "none"
    } else {
      saveexpend = "out"
      saveincome = "in"
    }
    return (
      <div className="row-transaction" id={checkifsave}>
        <input
          id={savedate}
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
          id={savememo}
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
          id={savedata}
          categories={budget}
          data={data.category}
  
          change={(event) => {
            if (save) {
              //handleChange(event.target.value, savedata)
            }
          }}
        />
        <input
          id={saveexpend}
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
          id={saveincome}
          placeholder="Income"
          className="income"
          value={"¥" + data.income.toLocaleString()}
          onChange={(event) => {
            if (save) {
              //handleChange(event.target.value, saveincome)
            }
          }}
        />
        
        <Delete
          value={data}
          index={index}
          key={index}
          id={data.id}
          tran={tran}
          transcallback={(stuff) => {
            //handleDelete(stuff, index, data[0]);
          }}
          none={savenone}
        />
      </div>
    );
  }


  export { Row }