var maxProfit = function(prices) {
   let minPrice = prices[0];
   let Max = 0;
   for (let i = 1; i < prices.length; i++){
       let current = prices[i];
       if (minPrice > current){
           minPrice = current;
       }
       if (current - minPrice > Max){
           Max = current - minPrice;
       }
   }
   return Max
};