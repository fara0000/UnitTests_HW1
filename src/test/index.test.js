//если первое число четное найти произведение , нечетное сумму.
describe('HW_1 ' , function() {
    //№1 (Condiotional Operators)
    describe('№1 Conditional Operators' , function() {
        //1
        describe('GetSumOrMultiply' , function() {
            it('should be defined',function() {
                assert.isDefined(GetSumOrMultiply, 'function has been defined')
            })
        
            it('should return sum (5,5)' , function() {
                const firstNum = 5;
                const secondNum = 5;
                const expected = 10;
        
                const actual = GetSumOrMultiply(firstNum,secondNum);
        
                assert.deepEqual(actual, expected); 
            })
        
            it('should return product (4,7)' , function() {
                const firstNum = 4;
                const secondNum = 7;
                const expected = 28;
                
                const actual = GetSumOrMultiply(firstNum,secondNum);
        
                assert.deepEqual(actual, expected); 
            })
            
            it('should return product (0,5)' , function() {
                const firstNum = 0;
                const secondNum = 5;
                const expected = 0;
                
                const actual = GetSumOrMultiply(firstNum,secondNum);
        
                assert.deepEqual(actual, expected); 
            })
        
            it('should return product (undefined,undefined)' , function() {
                const firstNum = undefined;
                const secondNum = undefined;
                const expected = 'Please,input right data!';
                
                const actual = GetSumOrMultiply(firstNum,secondNum);
        
                assert.deepEqual(actual, expected); 
            })
        
            it('should return product (-4,)' , function() {
                const firstNum = -4;
                const secondNum = undefined;
                const expected = 'Please,input right data!';
                
                const actual = GetSumOrMultiply(firstNum,secondNum);
        
                assert.deepEqual(actual, expected); 
            })
        })
        //2
        describe('fourthCoordinate' , function() {
            it('should be defined',function() {
                assert.isDefined(fourthCoordinate, 'function has been defined')
            })
            
            it('should return Wrong input! (0,undefined)' , function() {
                const firstNum = 0;
                const secondNum = undefined;
                const expected = 'Wrong input!';
        
                const actual = fourthCoordinate(firstNum,secondNum);
        
                assert.deepEqual(actual, expected); 
            })

             it('should return 1 (5,5)' , function() {
                const firstNum = 5;
                const secondNum = 5;
                const expected = 1;
        
                const actual = fourthCoordinate(firstNum,secondNum);
        
                assert.deepEqual(actual, expected); 
            })

            it('should return 2 (-5,5)' , function() {
                const firstNum = -5;
                const secondNum = 5;
                const expected = 2;
        
                const actual = fourthCoordinate(firstNum,secondNum);
        
                assert.deepEqual(actual, expected); 
            })

            it('should return 4 (-5,-5)' , function() {
                const firstNum = 5;
                const secondNum = -5;
                const expected = 4;
        
                const actual = fourthCoordinate(firstNum,secondNum);
        
                assert.deepEqual(actual, expected); 
            })

            it('should return 3 (5,-5)' , function() {
                const firstNum = -5;
                const secondNum = -5;
                const expected = 3;
        
                const actual = fourthCoordinate(firstNum,secondNum);
        
                assert.deepEqual(actual, expected); 
            })
        })
        //3
        describe('getSumOfPositiveNumbers' , function() {
            it('should be defined',function() {
                assert.isDefined(getSumOfPositiveNumbers, 'function has been defined')
            })
            
            it('should return sum of positive (undefined,undefined,undefined)' , function() {
                const firstNum = undefined;
                const secondNum = undefined;
                const thirdNum = undefined;
                const expected = 'Wrong input!';
        
                const actual = getSumOfPositiveNumbers(firstNum,secondNum,thirdNum);
        
                assert.deepEqual(actual, expected); 
            })

            it('should return sum of positive (1,2,4)' , function() {
                const firstNum = 1;
                const secondNum = 2;
                const thirdNum = 4;
                const expected = 7;
        
                const actual = getSumOfPositiveNumbers(firstNum,secondNum,thirdNum);
        
                assert.deepEqual(actual, expected); 
            })

            it('should return sum of positive (1,-2,4)' , function() {
                const firstNum = 1;
                const secondNum = -2;
                const thirdNum = 4;
                const expected = 5;
        
                const actual = getSumOfPositiveNumbers(firstNum,secondNum,thirdNum);
        
                assert.deepEqual(actual, expected); 
            })
            
            it('should return sum of positive (-1,-2,-4)' , function() {
                const firstNum = -1;
                const secondNum = -2;
                const thirdNum = -4;
                const expected = 0;
        
                const actual = getSumOfPositiveNumbers(firstNum,secondNum,thirdNum);
        
                assert.deepEqual(actual, expected); 
            })
        })
        //4
        describe('getSumOfMax' , function() {
            it('should be defined',function() {
                    assert.isDefined(getSumOfMax, 'function has been defined')
            })
                
            it('should return sum of max description (2,2,4)' , function() {
                const firstNum = 2;
                const secondNum = 2;
                const thirdNum = 4;
                const expected = 19;
            
                const actual = getSumOfMax(firstNum,secondNum,thirdNum);
            
                assert.deepEqual(actual, expected); 
            })
            
            it('should return sum of max description (1,2,3)' , function() {
                const firstNum = 1;
                const secondNum = 2;
                const thirdNum = 3;
                const expected = 9;
            
                const actual = getSumOfMax(firstNum,secondNum,thirdNum);
            
                assert.deepEqual(actual, expected); 
            })
            
            it('should return sum of max description (undefined,2,3)' , function() {
                const firstNum = undefined;
                const secondNum = 2;
                const thirdNum = 3;
                const expected = 'Wrong input!';
            
                const actual = getSumOfMax(firstNum,secondNum,thirdNum);
            
                assert.deepEqual(actual, expected); 
            })
            
            it('should return sum of max description (0,2,3)' , function() {
                const firstNum = 0;
                const secondNum = 2;
                const thirdNum = 3;
                const expected = 8;
            
                const actual = getSumOfMax(firstNum,secondNum,thirdNum);
            
                assert.deepEqual(actual, expected); 
            })
            
            it('should return sum of max description (1,2,3)' , function() {
                const firstNum = 1;
                const secondNum = 2;
                const thirdNum = 3;
                const expected = 9;
            
                const actual = getSumOfMax(firstNum,secondNum,thirdNum);
            
                assert.deepEqual(actual, expected); 
            })
            
            it('should return sum of max description (undefined,2,3)' , function() {
                const firstNum = undefined;
                const secondNum = 2;
                const thirdNum = 3;
                const expected = 'Wrong input!';
            
                const actual = getSumOfMax(firstNum,secondNum,thirdNum);
            
                assert.deepEqual(actual, expected); 
            })
        })
        //5
        describe('getAssessment', function() {
            it('should be defined', function() {
                assert.isDefined(getAssessment , 'function has been defined')
            })

            it('should  return assessment of F (0)', function() {
                const num = 0;
                expected = 'F';

                const actual = getAssessment(num);

                assert.deepEqual(actual,expected);
            })

            it('should  return assessment of D (58)', function() {
                const num = 58;
                expected = 'D';

                const actual = getAssessment(num);

                assert.deepEqual(actual,expected);
            })

            it('should  return assessment of A (94)', function() {
                const num = 94;
                expected = 'A';

                const actual = getAssessment(num);

                assert.deepEqual(actual,expected);
            })

            it('should  return Warning (-2)', function() {
                const num = -2;
                expected = 'Booom Try again!';

                const actual = getAssessment(num);

                assert.deepEqual(actual,expected);
            })

            it('should  return Warning  (101)', function() {
                const num = 101;
                expected = 'Booom Try again!';

                const actual = getAssessment(num);

                assert.deepEqual(actual,expected);
            })

            it('should  return  Warning (undefined)', function() {
                const num = 101;
                expected = 'Booom Try again!';

                const actual = getAssessment(num);

                assert.deepEqual(actual,expected);
            })
        })
    })
    //№2 (Loops)
    describe('№2 Loops' , function() {
        //1
        describe('SumofEvenNumbers', function () {
            it('should be defined' , function() {
                assert.isDefined(SumofEvenNumbers , 'function has been defined')
            })

            it('should return sum and quantity of even number' , function() {
                const expected = `Summary is 2450 , Quantity is 49.`;

                const actual = SumofEvenNumbers();

                assert.deepEqual(actual,expected);
            })
        })
        //2
        describe('getSimpleNumber', function (){
            it('should be defined' , function() {
                assert.isDefined(getSimpleNumber , 'function has been defined')
            })

            it('should return Warning (0)' , function() {
                const num = 0 
                const expected = 'Wrong input!'

                const actual = getSimpleNumber()

                assert.deepEqual(actual,expected)
            })

            it('should return Warning (undefined)' , function() {
                const num = undefined 
                const expected = 'Wrong input!'

                const actual = getSimpleNumber()

                assert.deepEqual(actual,expected)
            })

            it('should return Simple (5)' , function() {
                const num = 5; 
                const expected = 'Simple';

                const actual = getSimpleNumber(num)

                assert.deepEqual(actual,expected)
            })

            it('should return Complicated (8)' , function() {
                const num = 8; 
                const expected = 'Complicated';

                const actual = getSimpleNumber(num)

                assert.deepEqual(actual,expected)
            })
        })
        //3
        describe('getSquareOfNumber', function() {
            it('should be defined' , function() {
                assert.isDefined(getSquareOfNumber)
            });

            it('should return Warning', function() {
                const num = undefined;
                const expected = 'Wrong Input!';

                const actual = getSquareOfNumber(num);

                assert.deepEqual(actual,expected);
            });

            it('should return Warning', function() {
                const num = null;
                const expected = 'Wrong Input!';

                const actual = getSquareOfNumber(num);

                assert.deepEqual(actual,expected);
            });

            it('should return Warning', function() {
                const num = '';
                const expected = 'Wrong Input!';

                const actual = getSquareOfNumber(num);

                assert.deepEqual(actual,expected);
            });

            it('should return square of number', function() {
                const num = 16;
                const expected = 4;

                const actual = getSquareOfNumber(num);

                assert.deepEqual(actual,expected);
            });

            it('should return square of number', function() {
                const num = 25;
                const expected = 5;

                const actual = getSquareOfNumber(num);

                assert.deepEqual(actual,expected);
            });
        });
        //4
        describe('getFactorial', function (){
            it('should be defined' , function() {
                assert.isDefined(getFactorial , 'function has been defined')
            })

            it('should return Warning (undefined)' , function() {
                const num = undefined;
                const expected = 'Wrong input!';

                const actual = getFactorial(num)

                assert.deepEqual(actual,expected)
            })

            it('should return Factrorial (3)' , function() {
                const num = 3; 
                const expected = 6;

                const actual = getFactorial(num);

                assert.deepEqual(actual,expected);
            })

            it('should return Warning (-2)' , function() {
                const num = -2; 
                const expected = 'Wrong input!';

                const actual = getFactorial(num);

                assert.deepEqual(actual,expected);
            })

            it('should return Factorial(0)' , function() {
                const num = 1;
                const expected = 1;

                const actual = getFactorial(num);

                assert.deepEqual(actual,expected);
            })
        })
        //5
        describe('getSumOfDigits', function (){
            it('should be defined' , function() {
                assert.isDefined(getSumOfDigits , 'function has been defined');
            })

            it('should return Warning (undefined)' , function() {
                const num = undefined;
                const expected = 'Booom Try Again!';

                const actual = getSumOfDigits(num);

                assert.deepEqual(actual,expected);
            })

            it('should return Sum of (123)' , function() {
                const num = 123;
                const expected = 6;

                const actual = getSumOfDigits(num);
                
                assert.deepEqual(actual,expected);
            })

            it('should return Sum of (500)' , function() {
                const num = 500;
                const expected = 5;

                const actual = getSumOfDigits(num);

                assert.deepEqual(actual,expected);
            })
        })
        //6
        describe('getSpecularNumber', function() {
            it('should be defined', function() {
                assert.isDefined(getSpecularNumber, 'function has been defined')
            })

            it('should return reverse of (123)' , function() {
                const num = 123;
                const expected = 321;

                const actual = getSpecularNumber(num);
                
                assert.deepEqual(actual,expected);
            })

            it('should return reverse of (300)' , function() {
                const num = 300;
                const expected = 003;

                const actual = getSpecularNumber(num);
                
                assert.deepEqual(actual,expected);
            })

            it('should return Warning (undefined)' , function() {
                const num = undefined;
                const expected = 'Wrong Input!';

                const actual = getSpecularNumber(num);
                
                assert.deepEqual(actual,expected);
            })

            it('should return Warning (null)' , function() {
                const num = null;
                const expected = 'Wrong Input!';

                const actual = getSpecularNumber(num);
                
                assert.deepEqual(actual,expected);
            })
        });
    })
    //№3 (Array)
    describe('№3 Array' , function() {
        //1
        describe('getMinElement', function (){
            it('should be defined' , function() {
                assert.isDefined(getMinElement , 'function has been defined')
            });

            it('should return min element of array ([4, 7, 0, 1])', function() {
                const array = [4, 7, 0, 1];
                const expected = 0;

                const actual = getMinElement(array);

                assert.deepEqual(actual,expected);
            });
        
            it('should return Warning (undefined)' , function() {
                const array = undefined;
                const expected = 'Wrong Input!';

                const actual = getMinElement(array);

                assert.deepEqual(actual,expected);
            });

            it('should return Warning (null)' , function() {
                const array = null;
                const expected = 'Wrong Input!';

                const actual = getMinElement(array);

                assert.deepEqual(actual,expected);
            });

            it('should return Warning ([])' , function() {
                const array = [];
                const expected = 'Wrong Input!';

                const actual = getMinElement(array);

                assert.deepEqual(actual,expected);
            });
            
            it('should return Warning (1)', function() {
                const array =  1;
                const expected = 'Wrong Input!';

                const actual = getMinElement(array);

                assert.deepEqual(actual,expected);
            });

            it('should return min element of array ([2])', function() {
                const array = [2];
                const expected = 2;

                const actual = getMinElement(array);

                assert.deepEqual(actual,expected);
            });

            it('should return min element of array ([2,3])', function() {
                const array = [2,3];
                const expected = 2;

                const actual = getMinElement(array);

                assert.deepEqual(actual,expected);
            });

            it('should return Warning (\'""\')' , function() {
                const array = ""
                const expected = 'Wrong Input!';

                const actual = getMinElement(array);

                assert.deepEqual(actual,expected)
            });
        });
        //2
        describe('getMaxElement', function() {
            it('should be defined' , function() {
                assert.isDefined(getMaxElement, 'function has been defined')
            });

            it('should return max element of array ([4, 7, 0, 1])', function() {
                const array = [4, 7, 0, 1];
                const expected = 7;

                const actual = getMaxElement(array);

                assert.deepEqual(actual,expected);
            });
        
            it('should return Warning (undefined)', function() {
                const array = undefined;
                const expected = 'Wrong Input!';

                const actual = getMaxElement(array);

                assert.deepEqual(actual,expected);

            });

            it('should return Warning (null)', function() {
                const array = null;
                const expected = 'Wrong Input!';

                const actual = getMaxElement(array);

                assert.deepEqual(actual,expected);
            });

            it('should return Warning ([])', function() {
                const array = [];
                const expected = 'Wrong Input!';

                const actual = getMaxElement(array);

                assert.deepEqual(actual,expected);
            });
           
            it('should return Warning (1)', function() {
                const array =  1;
                const expected = 'Wrong Input!';

                const actual = getMaxElement(array);

                assert.deepEqual(actual,expected);
            });

            it('should return max element of array ([2])', function() {
                const array = [2];
                const expected = 2;

                const actual = getMaxElement(array);

                assert.deepEqual(actual,expected);
            });

            it('should return max element of array ([2,3])', function() {
                const array = [2,3];
                const expected = 3;

                const actual = getMaxElement(array);

                assert.deepEqual(actual,expected);
            });

            it('should return Warning (\'""\')', function() {
                const array = ""
                const expected = 'Wrong Input!';

                const actual = getMaxElement(array);

                assert.deepEqual(actual,expected)
            });
        });
        //3
        describe('getMinIndex', function() {
            it('should be defined' , function() {
                assert.isDefined(getMinIndex, 'function has been defined')
            });

            it('should return MinIndex of arra([4, 7, 0, 1])' , function() {
                const array = [4, 7, 0, 1];
                const expected = 2;

                const actual = getMinIndex(array);

                assert.deepEqual(actual,expected);
            });
        
            it('should return Warning (undefined)' , function() {
                const array = undefined;
                const expected = 'Wrong Input!';

                const actual = getMinIndex(array);

                assert.deepEqual(actual,expected);
            });

            it('should return Warning (null)' , function() {
                const array = null;
                const expected = 'Wrong Input!';

                const actual = getMinIndex(array);

                assert.deepEqual(actual,expected);
            });

            it('should return Warning ([])' , function() {
                const array = [];
                const expected = 'Wrong Input!';

                const actual = getMinIndex(array);

                assert.deepEqual(actual,expected);
            });

            it('should return MinIndex of array ([2])' , function() {
                const array = [2];
                const expected = 0;

                const actual = getMinIndex(array);

                assert.deepEqual(actual,expected);
            });

            it('should return  MinIndex of array ([2,3])' , function() {
                const array = [2,3];
                const expected = 0;

                const actual = getMinIndex(array);

                assert.deepEqual(actual,expected);
            });

            it('should return Warning (1)', function() {
                const array = 1;
                const expected = 'Wrong Input!';

                const actual = getMinIndex(array);

                assert.deepEqual(actual,expected);
            });

            it('should return Warning (\'""\')' , function() {
                const array = ""
                const expected = 'Wrong Input!';

                const actual = getMinIndex(array);

                assert.deepEqual(actual,expected)
            });
        });
        //4
        describe('getMaxIndex', function() {
            it('should be defined' , function() {
                assert.isDefined(getMaxIndex, 'function has been defined')
            });

            it('should return max index of array ([4, 7, 0, 1])' , function() {
                const array = [4, 7, 0, 1];
                const expected = 1;

                const actual = getMaxIndex(array);

                assert.deepEqual(actual,expected);
            });
        
            it('should return Warning (undefined)' , function() { 
                const array = undefined;
                const expected = 'Wrong Input!';

                const actual = getMaxIndex(array);

                assert.deepEqual(actual,expected);

            });

            it('should return Warning (null)' , function() {
                const array = null;
                const expected = 'Wrong Input!';

                const actual = getMaxIndex(array);

                assert.deepEqual(actual,expected);
            });

            it('should return Warning (1)', function() {
                const array =  1;
                const expected = 'Wrong Input!';

                const actual = getMaxIndex(array);

                assert.deepEqual(actual,expected);
            });

            it('should return Warning ([])' , function() {
                const array = [];
                const expected = 'Wrong Input!';

                const actual = getMaxIndex(array);

                assert.deepEqual(actual,expected);
            });

            it('should return max index of array ([2])' , function() {
                const array = [2];
                const expected = 0;

                const actual = getMaxIndex(array);

                assert.deepEqual(actual,expected);
            });

            it('should return  max index of element ([2,3])' , function() {
                const array = [2,3];
                const expected = 1;

                const actual = getMaxIndex(array);

                assert.deepEqual(actual,expected);
            });

            it('should return max index of array (\'""\')' , function() {
                const array = ""
                const expected = 'Wrong Input!';

                const actual = getMaxIndex(array);

                assert.deepEqual(actual,expected)
            });
        });
        //5
        describe('getSumOfOddIndex', function() {
            it('should be defined' , function() {
                assert.isDefined(getSumOfOddIndex,'function has been defined ')
            });

            it('should return sum of odd index ([1, 2, 4, 3])', function() {
                const array =  [1, 2, 4, 3];
                const expected = 5;

                const actual = getSumOfOddIndex(array);

                assert.deepEqual(actual,expected);
            });

            it('should return sum of odd index ([3,3,4,5,6]', function() { 
                const array = [3,3,4,5,6];
                const expected = 8;

                const actual = getSumOfOddIndex(array);

                assert.deepEqual(actual,expected)
            });

            it('should return sum of odd index ([3,5]' , function() {
                const array = [3,5];
                const expected = 5;

                const actual = getSumOfOddIndex(array);

                assert.deepEqual(actual,expected)
            });

            it('should return sum Warning ([3])' , function() {
                const array = [3];
                const expected = 0;

                const actual = getSumOfOddIndex(array);

                assert.deepEqual(actual,expected)
            });
            
            it('should return Warning (1)', function() {
                const array =  1;
                const expected = 'Wrong Input!';

                const actual = getSumOfOddIndex(array);

                assert.deepEqual(actual,expected);
            });

            it('should return  Warning (undefined)' , function() {
                const array = undefined;
                const expected = 'Wrong Input!';

                const actual = getSumOfOddIndex(array);

                assert.deepEqual(actual,expected)
            });

            it('should return Warning (null)' , function() {
                const array = null
                const expected = 'Wrong Input!';

                const actual = getSumOfOddIndex(array);

                assert.deepEqual(actual,expected)
            });

            it('should return sum of odd index ([])' , function() {
                const array = [];
                const expected = 'Wrong Input!';

                const actual = getSumOfOddIndex(array);

                assert.deepEqual(actual,expected)
            });

            it('should return sum of odd index (\'""\')' , function() {
                const array = ""
                const expected = 'Wrong Input!';

                const actual = getSumOfOddIndex(array);

                assert.deepEqual(actual,expected);
            }); 
        })
        //6
        describe('getReverseOfArray', function() {
            it('should be defined', function() {
                assert.isDefined('getReverseOfArray');
            });

            it('should return the reverse array', function() {
                const array = [1, 2, 3, 5, 6, 0,-1];
                const expected = [-1, 0, 6, 5, 3, 2, 1];

                const actual = getReverseOfArray(array);

                assert.deepEqual(actual, expected);
            });

            it('should return wrong input (undefined)', function() {
                const array = undefined;
                const expected = 'Wrong Input!';

                const actual = getReverseOfArray(array);

                assert.deepEqual(actual, expected);
            });

            it('should return wrong input (null)', function() {
                const array = null;
                const expected = 'Wrong Input!';

                const actual = getReverseOfArray(array);

                assert.deepEqual(actual, expected);
            });

            it('should return wrong input (undefined)', function() {
                const array = 2;
                const expected = 'Wrong Input!';

                const actual = getReverseOfArray(array);

                assert.deepEqual(actual, expected);
            });

            it('should return wrong input ([])', function() {
                const array = [];
                const expected = 'Wrong Input!';

                const actual = getReverseOfArray(array);

                assert.deepEqual(actual, expected);
            });

            it('should return the reverse array', function() {
                const array = [5];
                const expected = [5];

                const actual = getReverseOfArray(array);

                assert.deepEqual(actual, expected);
            });

            it('should return the reverse array', function() {
                const array = [5, 3];
                const expected = [3, 5];

                const actual = getReverseOfArray(array);

                assert.deepEqual(actual, expected);
            });
        });
        //7  
        describe('getQuantityOfOddElements', function() {
            it('should be defined', function() {
                assert.isDefined(getQuantityOfOddElements, 'function has been defined')
            });

            it('should return quantity of odd elements ([1,3,5,4,6,8,9,1,4,])' , function() {
                const array = [1,3,5,4,6,8,9,1,4,];
                const expected = 5;

                const actual = getQuantityOfOddElements(array);

                assert.deepEqual(actual,expected);
            });

            it('should return quantity of odd elements ([3,5,7,11,2])', function() {
                const array = [3,5,7,11,2];
                const expected = 4;

                const actual = getQuantityOfOddElements(array);

                assert.deepEqual(actual,expected)
            });
            it('should return quantity of odd elements ([3,5]' , function() {
                const array = [3,5];
                const expected = 2;

                const actual = getQuantityOfOddElements(array);

                assert.deepEqual(actual,expected)
            });

            it('should return  Warning ([3])' , function() {
                const array = [3];
                const expected = 1;

                const actual = getQuantityOfOddElements(array);

                assert.deepEqual(actual,expected)
            });
            
            it('should return Warning (1)', function() {
                const array =  1;
                const expected = 'Wrong Input!';

                const actual = getQuantityOfOddElements(array);

                assert.deepEqual(actual,expected);
            });

            it('should return Warning (undefined)' , function() {
                const array = undefined;
                const expected = 'Wrong Input!';

                const actual = getQuantityOfOddElements(array);

                assert.deepEqual(actual,expected)
            });

            it('should return Warning (null)' , function() {
                const array = null
                const expected = 'Wrong Input!';

                const actual = getQuantityOfOddElements(array);

                assert.deepEqual(actual,expected)
            });

            it('should return Warning ([])' , function() {
                const array = [];
                const expected = 'Wrong Input!';

                const actual = getQuantityOfOddElements(array);

                assert.deepEqual(actual,expected)
            });

            it('should return Warning (\'""\')' , function() {
                const array = ""
                const expected = 'Wrong Input!';

                const actual = getQuantityOfOddElements(array);

                assert.deepEqual(actual,expected);
            }); 
        });
        //8
        describe('getHalfReverseOfArray', function() {
            it('should be defined', function() {
                assert.isDefined(getHalfReverseOfArray , )
            });
        });
    });
    //№4(Functions)
    describe('№4 Functions', function() {
        describe('defineWeekDay' , function() {
            it('should be defined',function() {
                assert.isDefined(defineWeekDay, 'function has been defined')
            })

            it('should return \' \' (0)', function() {
                const number = 0;
                const expected = ' ';

                const actual = defineWeekDay(number);

                assert.deepEqual(actual, expected);
            })

            it('should return \'\'(undefined)', function() { 
                const number = undefined;
                const expected = ' ';

                const actual = defineWeekDay(number);

                assert.deepEqual(actual, expected);
            })

            it('should return Monday (1)', function() { 
                const number = 1;
                const expected = 'Monday';

                const actual = defineWeekDay(number);

                assert.deepEqual(actual, expected);
            })
            
            it('should return Wednesday (3)', function() { 
                const number = 3;
                const expected = 'Wednesday';

                const actual = defineWeekDay(number);

                assert.deepEqual(actual, expected);
            });

            it('should return Sunday (7)', function() { 
                const number = 7;
                const expected = 'Sunday';

                const actual = defineWeekDay(number);

                assert.deepEqual(actual, expected);
            });
        });
    });
});
