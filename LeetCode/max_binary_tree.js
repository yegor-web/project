function TreeNode(val) {
   this.val = val;
   this.left = this.right = 0;

   const maxDepth = root =>{
      if (!root) return 0
      return 1+ Math.max(maxDepth(root.right),maxDepth(root.left))
   }
}