
// https://www.codewars.com/kata/simple-pig-latin/train/javascript


function pigIt(str){
  let x = str.split(" ");
  let answer=[];
  for(w of x){
    let y = w.split('');
    if(/^[a-zA-Z()]+$/.test(y[0])){
    y.push(y[0]+"ay")
    y.shift();
    let z = y.join('');
    console.log(z);
    answer.push(z);
    }else{
      answer.push(y)
    }
  }
  return answer.join(" ");
}

pigIt("hey there !");

