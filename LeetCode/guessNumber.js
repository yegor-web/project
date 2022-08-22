var guessNumber = function(n) {
   start = 1;
   end = n;
   while (start < end){
       let mid = start+ Math.floor((end - start)/2);
       let result = guess(mid)
       if (result == 0){
           return mid
       }
       else if (result == 1){
           start = mid + 1
       }
       else {
           end = mid -1
       }
   }
};