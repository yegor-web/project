lists = [[1,4,5],[1,3,4],[2,6]]

var mergeKLists = function (lists) {
   if (lists === undefined || lists.length === 0) {
       return null;
   }
   return mergeLists(lists, 0, lists.length - 1);
};

const mergeLists = (lists, start, end) => {
   if (start === end) {
       return lists[start];
   }

   let mid = start + parseInt((end - start) / 2);
   let left = mergeLists(lists, start, mid);
   let right = mergeLists(lists, mid + 1, end);
   return merge(left, right);
};

const merge = (left, right) => {
   let head = new ListNode(-1);
   let temp = head;

   while (left !== null && right != null) {
       if (left.val < right.val) {
           temp.next = left;
           left = left.next;
       } else {
           temp.next = right;
           right = right.next;
       }
       temp = temp.next;
   }
   
   while (left != null) {
       temp.next = left;
       left = left.next;
       temp = temp.next;
   }

   while (right != null) {
       temp.next = right;
       right = right.next;
       temp = temp.next;
   }
   return head.next;
};