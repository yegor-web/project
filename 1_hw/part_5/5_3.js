// сделать первый символ заглавным 
function ucFirst(str){
    let s=str[0].toUpperccase()+str.slice(1); 
    return s
}

// проверка на спам 
function checkSpam(str){
    let s= str.toLowerCase();
    return s.includes('viagra') || s.includes('xxx');
}

// усечение строки 
function truncate(str, maxlength){
    if (str.length>maxlength) {
        return str.substr(0,maxlength-1)+"…";
    }
    return str;
} 

// выделить число 
function extractCurrencyValue(str){
    return +str.slice(1);
}