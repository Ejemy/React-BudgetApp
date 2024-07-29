
export const handleTransactionChange = (transaction, data, eventValue, key) => {
    let transactionCopy = transaction.slice();
    for (let i in transactionCopy){
        if(transactionCopy[i].id === data.id){
            data[key] = eventValue;
        }
    }
    return transactionCopy;
}

