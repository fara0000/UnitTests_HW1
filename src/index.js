//№1(Conditional Operator)
function GetSumOrMultiply(a,b) {
    if ( (a !==0) && !a || (b !==0) && !b ) return 'Please,input right data!'

    return a % 2 === 0  ?  a * b : a + b;
}
//№2(Conditional Operator)
function fourthCoordinate(x,y) {
    let result;

    if (!x || !y)  result = 'Wrong input!';
    
    if (x>0 && y>0){
        result = 1;
    }
    else if (x<0 && y>0){
        result = 2;
    }
    else if (x<0 && y<0){
        result = 3;
    }
    else if (x>0 && y<0){
        result = 4;
    }

    return result;
}
console.log(getCoordinate(1,-4));

//№3(Conditional Operator)
function getSumOfPositiveNumbers(num1,num2,num3) {
    let result = 0;
    
    if(!num1 || !num2 || !num3 ) return 'Wrong input!';
    if (num1 , num2 , num3 < 0) result = 0;

    if (num1>0){
        result = result + num1
    }
    if (num2>0){
        result = result + num2 
    }
    if (num3>0){
        result = result + num3
    }   
        return result 
    
}
//№4(Conditional Operator)
function getSumOfMax(a, b, c){
    let sum = a + b + c; 
    let mul = a * b * c;
        if(!a && (a !== 0)  || !b && (b !== 0) || !c && (c !== 0) ) return 'Wrong input!';
        return  mul > sum  ?  mul + 3 : sum +3;
}
    console.log(getSumOfMax(2,2,3))

//№5(Conditional Operator)
function getAssessment(rating){
    let result;

    if ((!rating && rating !== 0) || 0 > rating || rating > 100 || ( rating !== rating)){
        return 'Booom Try again!'
    }

    if (rating >=0 && rating <= 19) { 
        result = 'F';
    } else if (rating >= 20 && rating <= 39) {
        result = 'E';   
    } else if (rating >= 40 && rating <=  59) {
        result = 'D';
    } else if (rating >= 60 && rating <= 74) {
        result = 'C';
    } else if (rating >= 75 && rating <= 89) {
        result = 'B';
    } else if (rating >= 90 && rating <= 100) {
        result = 'A';
    }
       
    return result;
}
    console.log(getAssessment(41));


//№1(Loops)
function SumofEvenNumbers() {
    let summary = 0;
    let i;
    let quantity = 0;
   
    for(i = 2; i < 99; i += 2){
       
        summary += i;
        quantity++;
    }
    return`Summary is ${summary} , Quantity is ${quantity}.` ;  
    
}
console.log(SumofEvenNumbers());
//№2(Loops)
function getSimpleNumber(num) {
    let i;
    let result = 'Simple'

    if (!num || num === 0) result = 'Wrong input!'
    for(i = 2; i < num; i++) {
        if(num % i === 0) {
           result  = 'Complicated' ;
         } 
    }

    return result; 
}
console.log(getSimpleNumber(17))
//№3(Loops)
function getSquareOfNumber(num) {
    if (!num) return 'Wrong Input!'
    let result = 0;

    result = num ** (1/2) ;
    
    return ~~result;
}
console.log(getSquareOfNumber(16))






//№4(Loops)
function getFactorial(n){
    let i;
    let multiple = 1;
    
    if(n === 0) return multiple;
    if(!n || n < 0 ) return 'Wrong input!'
    
    for( i = 1 ; i <= n ; i++ ){  
    multiple *=  i;
    }
    
    return multiple;
}
    console.log(getFactorial(3));
//№5(Loops)
function getSumOfDigits(num){
        let a = 0;
        let result = 0;

    if(!num) return 'Booom Try Again!'

    while(num){
            a = num % 10
            num = (num - a)/10
            result = result + a
            
            if(!num){
               return result; 
            }
    }
}

console.log(getSumOfDigits(555));
//№6(Loops)
function getSpecularNumber(num){
    let a = 0;
    let result = 0;
        
    if(!num) return 'Wrong Input!' 
    while(num >= 0){
        a = num % 10;
        result = result * 10 + a;
            num = (num - a) / 10;
             
        if(!num){
            return +result; 
                
        }
    }
 }
 console.log(getSpecularNumber(726))
 //№1(Arrays)
function getMinElement(arr){
    if(!arr || arr.length === 0 || (typeof(arr) !== 'object')) return 'Wrong Input!'
    
    let min = arr[0];
    
    for (let i = 1; i < arr.length; i++){
        if(min > arr[i]){
            min = arr[i];
        }
    }
    
            return min;
}
    let array = [4, 7, 0, 1];
console.log(getMinElement(array));
 //№2(Arrays)
function getMaxElement(arr){
    if(!arr || arr.length === 0 || (typeof(arr) !== 'object')) return 'Wrong Input!'

    let max = arr[0];
    
    for(i = 1; i < arr.length; i++){
        if(max < arr[i]){
            max = arr[i]; 
        }
    }

            return max;
}
    let array2 = [13, 11, 9, 3];
    console.log(getMaxElement(array2));     
//№3(Arrays)
function getMinIndex(arr){
    if(!arr || arr.length === 0 || (typeof(arr) !== 'object')) return 'Wrong Input!'
    let min = arr[0];
    let minIndex = 0 ;

    for( let i = 1; i < arr.length; i++){
        if(min > arr[i]){
            min = arr[i];
            minIndex = i;
        }
    }

            return minIndex ;
}
    let array3 = [3, 4, 6, 7];
    console.log(getMinIndex(array3));
//№4(Arrays)
function getMaxIndex(arr){
    if(!arr || arr.length === 0 || (typeof(arr) !== 'object')) return 'Wrong Input!'
    let max = arr[0];
    let indexOfMax = 0;
    
    for(i = 1; i < arr.length ; i++){
        if(max < arr[i]){
            max = arr[i]; 
            indexOfMax = i;
        }
    }

    return indexOfMax;
}
let array4 = [13, 11, 9, 3];
console.log(getMaxIndex(array4));
//№5(Arrays)
function getSumOfOddIndex(arr){
    if(!arr || arr.length === 0 || (typeof(arr) !== 'object')) return 'Wrong Input!'
    let sum = 0;
    
     
    for(i = 0 ; i<arr.length ; i++){
        if (i % 2 !== 0)
            sum =  sum + arr[i]
    }
    
    return sum;
}
let array5 = [1, 2, 4, 3];
console.log(getSumOfOddIndex(array5));
//№6(Arrays)
function getReverseOfArray(arr){
    if(!arr || arr.length === 0 || (typeof(arr) !== 'object')) return 'Wrong Input!'
    let reverse = [];

    for (let i = length-1 ; i >= 0 ; i--){
        reverse[reverse.length] = array[i];     
    }
    
    return reverse;
}

//№7(Arrays)
function getQuantityOfOddElements(arr){
    if(!arr || arr.length === 0 || (typeof(arr) !== 'object')) return 'Wrong Input!'
    let quantity = 0;
    let sum = 0;
    
    for( let i = 0 ; i<arr.length ; i++){
        if (arr[i] % 2 !== 0) {
            quantity++;
        }
    }
    
    return quantity;
}
let array7 = [2, 3, 4, 1];
console.log(getQuantityOfOddElements(array7));
//№8
function getHalfReverseOfArray(arr){
    if(!arr || arr.length === 0 || (typeof(arr) !== 'object')) return 'Wrong Input!'
    let reverse = [];

    for(let i = length - 1; i >= 0 ; i--){

    }
}

//№1 (Function)
function defineWeekDay(number) {
    const weekDays = ['Monday' , 'Tuesday' , 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let result = ' ';

    if (!number) return result;    
    
    for (let i = 0; i < weekDays.length; i++) {
        if( (number-1) === i ) {
            result = weekDays[i];
        }
    }
    
    return result;
}