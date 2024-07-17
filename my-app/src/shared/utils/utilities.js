export const modifyNum = (arr, filterArr) => {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j].match(/\d/)) {
        filterArr.push(arr[j]);
      }
    }
  
    const boxvalstr = filterArr.join("");
    return boxvalstr;
  }


  
