

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

  
  function CategoryName({ categname, idval, val, id, checkPersist, budget }) {
    return (
      <div className="category">
        <input type="checkbox" id={idval} value="persist" checked={val[5]} className="checkbox" onClick={(event) => checkPersist(event, val)} />
        <input
          placeholder="Category"
          className="category-name"
          value={val.category}
          onChange={(event) => categname(event, idval, budget)}
        />
      </div>
    );
  }


  function AmountBox({ Numvalue, Spent, trans, calcP, pd }) {
    let colorr = "black";
    let realSpent = 0;
    for (let x in trans) {
      if (trans[x][3] === Numvalue[1]) { //matched category name
        if (trans[x][4] > 0 && calcP(trans[x][2], pd[0].payday)) { //expense and in payperiod
          realSpent += trans[x][4]
        } else if (trans[x][4] > 0 && Numvalue[5] === true) { //expense all time and persist option true
          realSpent += trans[x][4]
        }
        if (trans[x][5] > 0) {
          realSpent -= trans[x][5]
        }
      }
    }
    const left = Numvalue[2] - realSpent
    if (left < 0) {
      colorr = "red"
    } else {
      colorr = "black"
    }
  
    return (
      <div className="amount-children" id="amountbox" style={{ color: colorr }}>
        ¥{left.toLocaleString()}
      </div>
    );
  }


  export {CategoryAmount, CategoryName, AmountBox};