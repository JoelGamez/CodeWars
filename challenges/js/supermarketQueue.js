/*There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

The function has two input variables:

customers: an array (list in python) of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
n: a positive integer, the number of checkout tills.
The function should return an integer, the total time required.*/

ffunction queueTime(customers, n) {
  let tills = [];
  let index;
  let lowest;
  let highest;

  for(let x=0;x<n;x++){
    tills[x]={val:0}
  }
// console.log(tills);
  for(c of customers){
    let x =0; 
    for(t of tills){
      // console.log("x: "+ x)
      x==0?index=x:null;
      // console.log("index: " + index)
      // console.log("t val:"+ t.val);
      t.val<tills[index].val?index=x:null;
      x++
    }
    tills[index].val+=c; 
  }
  for(let i= 0;i<tills.length;i++){
       i==0?lowest=tills[i].val:null;
       tills[i].val<lowest?lowest=tills[i].val:null;
  }
   for(let i= 0;i<tills.length;i++){
       i==0?highest=tills[i].val:null;
       tills[i].val>highest?highest=tills[i].val:null;
  }
  console.log(tills);
  console.log("Shortest time: "+lowest);
  console.log("Highest time: "+highest)
  return highest;
}
queueTime([2,3,4],3)



// https://www.codewars.com/kata/57b06f90e298a7b53d000a86/train/javascript

