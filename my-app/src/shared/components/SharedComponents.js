
function AddButton ({
    newItem
}) {
    return (
        <div className = "add-button-container">
            <button
                onClick = {newItem}
            >
                +
            </button>
        </div>
    )

}



function Delete({
    deleteItem,
  }) {
    return (
      <div className = "delete-button-container">
            <button
                onClick = {deleteItem}
            >
                -
            </button>
        </div>
    )
    
      
  }




export { AddButton, Delete };