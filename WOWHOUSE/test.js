function printNumbers(from, to){
   if (from<to) {
       return 1
   }
   else {
       let time = SetTimeout(() => {alert(from)},1000);
       printNumbers(from+1,to)
   }
}

printNumbers(1, 10)