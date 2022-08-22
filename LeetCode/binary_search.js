var search = function(nums, target) {
   start = 0;
   end = nums.length - 1;
   while (start<=end) {
       mid = Math.floor((end-start)/2) + start;
       if (nums[mid] == target) {
           return mid 
       }
       else if (nums[mid] < target) {
           start = mid +1;
       }
       else {
           end = mid -1;
       }
   }
   return -1
};