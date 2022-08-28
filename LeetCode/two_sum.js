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

/*
Нужно написать функцию compose.
Количество входящих функций в compose и число аргументов результирующей функции не ограничены.
*/

const square = (x) => x * x;
const times2 = (x) => x * 2;
const sum = (a, b) => a + b;

console.log(compose(square, times2)(2) === square(times2(2)));
console.log(compose(square, times2, sum)(3, 4) === square(times2(sum(3, 4))));

const mathOperations = compose(square, times2, sum);

mathOperations(3,4);
mathOperations(5,9);

function compose(...func){  // [() => {}, ...];
    return function func(...args){
        let res = args;
        for (let i = args.length; i>0; i--){
            
        return i(res);
    }
    }
}