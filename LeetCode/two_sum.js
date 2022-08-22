var twoSum = function(nums, target) {
   numObject={};
   for (let i=0; i < nums.length; i++){
       numObject[nums[i]]=i;
   }
   
   for (j = 0; j < nums.length; j++){
       let diff = target - nums[j];
       if (numObject[diff] && numObject[diff] !== j){
           return [j,numObject[diff]];
       }
   }
   return []
};