import {
    buildFilter,  
    elementField, //получение свойства текущего элемента списка
    filterField,  // получение свойства фильтра
} from "awesome-data-filter"  //подключение библиотеки 
import {moreThen, lessThen} from "awesome-data-filter/rules";  //фильтры из библиотеки
import {and} from "awesome-data-filter/conditions"; 

const filter = buildFilter({
    rules:{
        elementFilter: and([
            lessThen(filterField(prices), elementField(prices[1])),
            moreThen(filterField(prices), elementField(prices[0])),
        ])
    }
})

const { elements }= filter(
    filterValue,{
        elements:prices,
    },
);
return console.log(elements);
