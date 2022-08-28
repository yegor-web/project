var isValid = function(s) {
   let stack = [];
   let brackets = {
       ']': '[',
       ')': '(',
       '}': '{'
   };
   for (let i = 0; i < s.length; i++){
       const current = s[i];
       if (isClosedBracket(current)){
       if (brackets[current] !== stack.pop()) return false;
   }
       else {
           stack.push(current);
       }
   }
   return stack.length === 0;  
};

function isClosedBracket(ch) {
   return (']', '}', ')').indexOf(ch)> -1 ;
}