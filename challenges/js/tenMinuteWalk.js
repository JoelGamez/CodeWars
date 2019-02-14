// https://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript

function isValidWalk(walk) {
 let lat = 0, lon = 0;
 if(walk.length==10){
    walk.toString().split("").forEach(function(c){
      c=='n'?lat+=1:null;
      c=='s'?lat-=1:null;
      c=='w'?lon+=1:null;
      c=='e'?lon-=1:null;
    });
     if(lat==0&&lon==0){
       console.log(lat);
       return true;
      }else{
        return false
      }
}else{
  return false
}
}

isValidWalk(["n","s","n","n","n","n","n","n","n","n"])
