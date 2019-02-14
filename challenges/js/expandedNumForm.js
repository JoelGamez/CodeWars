// https://www.codewars.com/kata/write-number-in-expanded-form/train/javascript

/*You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'*/

function expandedForm(num) {
  let answer = "";
  let zero = "0";
  let nums = num.toString().split('');
  for(let i = 0; i <= nums.length-1; i++){
      nums[i]==0?null:answer+=`${nums[i]}${zero.repeat(nums.length-(i+1))}`;
      if(i<nums.length-1&&nums[i+1]!=0){
        answer+=" + ";
      }
}
 return answer;
}
expandedForm(7112000);
