
function Savings({
    data,
    index,
    handleDelete,
    savingsCallback,
    savingsname,
    savings,
  }) {
    return (
      <div className="row-savings">
        <input
          className="savings-name"
          placeholder="Savings Account Name"
          value={data.description}
          onChange={(event) => savingsname(event, index, savings)}
        />
        <input
          className="savings-amount"
          placeholder="Budgeted amount"
          value={"¥" + data.savingsamount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          id="savings"
          onChange={(event) => savingsCallback(event, savings, data.id)}
        />
        <div className="savings-total">
          {"¥" +
            (data.total + data.savingsamount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </div>
        {/* <Delete
          value={data}
          index={index}
          key={index}
          id={data[0]}
          savingsDelcallback={(event) => handleDelete(event, index, data[0])}
          sav={sav}
        /> */}
      </div>
    );
  }

  export {Savings}