var hasPathSum = function (root, targetSum) {

   return checkTree(root, targetSum, 0);

   function checkTree(root, targetSum, sum) {
       if (!root) {
           return false;
       }
   
       sum += root.val;
   
       if (root.left === null && root.right === null) {
           return sum === targetSum;
       }
   
       return checkTree(root.left, targetSum, sum) || checkTree(root.right, targetSum, sum)
   };

};