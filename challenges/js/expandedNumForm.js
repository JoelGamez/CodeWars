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
