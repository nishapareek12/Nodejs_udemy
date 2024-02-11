const name = "Andrew"
const userAge = 27

const user = {
    name: name,
    age: userAge,
    location: 'philadelphia'
}

console.log(user)

//object destructuring
const product = {
    label: 'red notebook',
    price: 3,
    stock: 201, 
    salePrice: undefined
}

//generally if we have to use these variable we have to use it after defining
// eg: const label = product.label
//     const price = product.price 

//otherwise we can destructure it

// const {label, price} = product;
// console.log(label)

//i can also destructure it inside a function

const transaction  = (type, {label, stock}) => {
    console.log(type, label, stock)
}

transaction('order', product)