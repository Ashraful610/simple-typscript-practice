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


// Problem-4: Suppose you have an array of tuples, where each tuple represents a product and contains the product name, price, and quantity. Write a TypeScript function that calculates the total cost of all the products in the array, using a generic type for the tuple and a type alias for the array.


type ProductTuple<T>= [string , T ,  T]
type ProductArray = ProductTuple<number>[]

const products2 : ProductArray = [
    ['Mobile' , 15000 , 2],
    ['Laptop' , 55000 , 1] ,
    ['Watch' , 2500 , 3]
]


function calculateTotalCost(products:ProductArray) :number {
 let totalCost  = 0 ;
 for(const product of products) {
    const [, price , quantity] = product
    totalCost += price * quantity
 }
 return totalCost
}

const total = calculateTotalCost(products2)
// console.log(total)

// Problem-5: Suppose you have an array of numbers in TypeScript, and you want to find the sum of all the even numbers in the array. How would you approach this problem and write code to solve it?

const numbers : number[] = [11 , 6 , 23 , 47, 49, 12 , 4, 53 , 66 , 29 , 60 , 82 ,75 , 89 , 122 , 42 , 33]
let totalEvenNumbers : number = 0 ;
for(const number of numbers){
    if(number % 2 === 0){
        totalEvenNumbers +=  number
    }
}
// console.log(totalEvenNumbers)

// Problem-6 : Create an interface called Person that includes properties for name (string), age (number), and email (string). Then create an array of Person objects and write a function that takes the array and a string email as parameters, and returns the Person object that matches the email or null if no match is found.

interface Person {
    name: string;
    age: number;
    email: string;
}
const PersonArray : Person[] = [
    {
        name: 'John',
        age: 34,
        email: 'john@example.com'
    },
    {
        name: 'Devid',
        age: 30,
        email: 'devid@example.com'
    },
    {
        name: 'Rock',
        age: 39,
        email: 'rock@example.com'
    }
]

function findPerson(personArray:Person[] , email:string):Person  | null{
    const person = personArray.find(person => person.email === email);
    return (person ? person : null);
}

const findedPerson = findPerson(PersonArray , 'devid@example.com');
console.log(findedPerson);
