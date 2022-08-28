const ckeckHeight = node => {
   if (node === null) return 0;
   
   const left = ckeckHeight(node.left);
   const right = ckeckHeight(node.right);
   
   if (left === false || right === false || Math.abs(left - right) > 1) {
     return false;
   }
   
   return Math.max(left, right) + 1;
 };
 
 const isBalanced = root => {
   if (root === null) return true;
   
   return ckeckHeight(root) !== false;
 };