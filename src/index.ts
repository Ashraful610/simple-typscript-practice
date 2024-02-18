// Problem-1 : Convert the following JavaScript array into a TypeScript tuple 
const userInfo = [101, "Ema", "John", true,  , "2023"];
const solve : [number , string , string , boolean , undefined,string] = [101, "Ema", "John", true,  , "2023"]

// Problem-2 : Write a TypeScript function that takes in two arrays of numbers as parameters. The function should compare the elements in both arrays and return a new array that contains only the elements that are present in both arrays.
function arrayFunction(array1: number[], array2: number[]):number[]{
    const matchArrayElements : number[] = []
    array1.forEach(number => {
        array2.forEach(secondNumber => {
            number === secondNumber && matchArrayElements.push(secondNumber)
        })
    })
    return matchArrayElements
}

const result = arrayFunction([1 , 2 , 3 , 4 , 5] , [2 , 4 , 6 , 7 , 1,44 , 22  , 91 , 9  , 10 , 3 , 24])
console.log(result)