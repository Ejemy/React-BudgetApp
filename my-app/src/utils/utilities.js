// export const calculatePayperiod = (theTrans) => {
//     const payd = settings[0].payday;
//     //PAYPERIOD IS
//     const today = new Date();
//     const day = today.getDate();
//     const month = today.getMonth();

//     const ttoday = new Date(theTrans);
//     const tday = ttoday.getDate();
//     const tmonth = ttoday.getMonth();

//     const sameMonth = tmonth === month;
//     const bothOver20 = tday >= payd && day >= payd;
//     const bothUnder20 = tday < payd && day < payd;
//     const bothOverOrUnder = bothOver20 || bothUnder20;
//     //Both transaction in question and today are in the same month. Both are either over or under payday.
//     const criteria1 = sameMonth && bothOverOrUnder;

//     const differentMonths1 = tmonth === month - 1;
//     const differentMonths2 = tmonth === month + 1;
//     //const different = differentMonths1 || differentMonths2; //if one is t is 2/13 and today is 3/20
//     const tover20 = tday >= payd;
//     const todayover20 = day >= payd;
//     const todayAhead = tover20 && differentMonths1 && !todayover20;

//     //Today is a month ahead. Transaction is past the payday. Today is under payday.
//     const criteria2 = todayAhead;

//     const oneIsDec = tmonth === 11;
//     const oneIsJan = month === 0;
//     const decAndJan = oneIsDec && oneIsJan;
//     //Special. Today is January and under payday. Transaction is over the payday.
//     const criteria3 = decAndJan && tover20 && !todayover20;
//     const payperiod = criteria1 || criteria2 || criteria3;
//     return payperiod;
//   }





function calculateTotal(savingss, boxv) {
  let total = 0;
  for (let x in boxv) {
    total += boxv[x][2];
  }
  for (let z in savingss) {
    //add savings to budgeted total
    total += savingss[z][2];
  }
  return total;
  //setTotal(total);
}



function calculateSpent(nextBudgetVal, nextTransaction) {
  // for (let x in nextBudgetVal) {
  //   let spent = 0;

  //   for (let ii in nextTransaction) {
  //     const pp = calculatePayperiod(nextTransaction[ii][2]);

  //     console.log("calculate spent and set BV , payperiod? ", pp);
  //     if (
  //       nextBudgetVal[x][1] === nextTransaction[ii][3] && //if categories match, expense is present, and
  //       nextTransaction[ii][4] > 0 &&
  //       pp
  //     ) {
  //       console.log("updating how much spent for...", nextBudgetVal[x][1]);
  //       spent += nextTransaction[ii][4];
  //       console.log("spent is... ", spent);
  //     } else if (
  //       nextBudgetVal[x][1] === nextTransaction[ii][3] && //if categories match, income present, and
  //       nextTransaction[ii][5] > 0 &&
  //       pp
  //     ) {
  //       spent -= nextTransaction[ii][5];
  //       console.log("Calculating how much spent for...", nextBudgetVal[x][1]);
  //       console.log("spent, ", spent);
  //     }
  //   }
  //   nextBudgetVal[x] = [
  //     nextBudgetVal[x][0],
  //     nextBudgetVal[x][1],
  //     nextBudgetVal[x][2],
  //     spent,
  //     nextBudgetVal[x][4],
  //     nextBudgetVal[x][5],
  //   ];
  // }
  // setBudget(nextBudgetVal);
}

