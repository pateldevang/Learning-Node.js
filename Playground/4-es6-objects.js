// object property short hand

const name = 'Andrew'
const age = 27

const user = {
  name,
  age,
  location: 'vellore'
}
console.log(user);


// object destruction

const product = {
  label: 'Red notebook',
  price: 3,
  stock: 201,
  salePrice: undefined
}

// const label = product.label
// const stock = product.stock

// const {label: productLabel,stock,rating = 5} = product
//
// console.log(productLabel);
// console.log(stock);
// console.log(rating);


const transaction = (type,{label,stock}) => {
console.log(type,label,stock);

}


transaction('order',product)
