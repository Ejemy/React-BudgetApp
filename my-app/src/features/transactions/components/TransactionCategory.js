

function TransactionCategory({ categories, change, index, data }) {

    return (
      <select
        name="dropdown"
        className="options"
        value={data.category}
        onChange={(event) => change(event, index)}
      >
        <option value="1" className="firstoption"></option>
        <option value="income" className="paycheck">
          Income
        </option>
        {categories.map((item, index) => (
          <option key={index} value={item[1]}>
            {item[1]}
          </option>
        ))}
      </select>
    );
  }


  export {TransactionCategory}