
// Your function will get a price, and a load of discounts. Your job is to write the function so that it calculates the maximum discount.

// - A price is a Number.
// - A load of discounts is a string like 15%, 8, 50%.
// - So, percentages, with %, and amounts, without %.
// - You have to think about the order of applying discounts.
// - Round the output amount to the nearest hundredth.
// - Output a Number.

// Examples

// discount(64, "50%, 50%") // 16
// // You have to reduce with 50% twice.

// discount(24, "20, 2") // 2
// // You have to subtract 20 and 2.

// discount(1000, '2%, 100, 50%, 16') // 374
// // You have to figure out the order in which discounts are applied.

// discount(12345, '4%, 21, 33.6%, 87, 3%, 80.62') // 7444.50


function discount(principal,discountString){
  discountArray=discountString.split(',');
  let discountByPercentage=[];
  let discountByValue=[];
  discountArray.forEach((e)=>e.includes('%')?discountByPercentage.push(Number(e.replace('%',''))):discountByValue.push(Number(e)));
  discountByPercentage.forEach((e)=>principal=principal*(1-e/100))
  discountByValue.forEach((e)=>principal=principal-e);
  return Number(principal.toFixed(2));
}

console.log(discount(64,'50%,50%'));
console.log(discount(24, "20, 2"));
console.log(discount(1000, '2%, 100, 50%, 16'));
console.log(discount(12345, '4%, 21, 33.6%, 87, 3%, 80.62'));