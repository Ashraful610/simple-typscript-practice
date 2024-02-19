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
// console.log(result)

// Problem-3 : You have an interface for Product, containing the product's id, name, price, and category. You want to filter an array of Products based on a specific criterion and value.
interface IProduct {
    id:number,
    name:string,
    price:number,
    category:string
}

const product1 : IProduct = {
    id:1,
    name:'Realme C33',
    price:15000,
    category:'Mobile'
}
const product2 : IProduct = {
    id:2,
    name:'Readmi note 11',
    price:19000,
    category:'Mobile'
}
const product3 : IProduct = {
    id:3,
    name:'Oppo',
    price:22000,
    category:'Mobile'
}
const product4: IProduct = {
    id:4,
    name:'Huwei',
    price:25000,
    category:'Mobile'
}
const products : IProduct[] = [product1, product2, product3, product4]

const filterProduct =<T extends keyof IProduct> (productArray:IProduct[] , key:T , value:number):IProduct[] => {
 const newArray = productArray.filter((product) =>product[key] === value )
 return newArray
}

const result2 = filterProduct(products ,'price' , 15000)
// console.log(result2)

