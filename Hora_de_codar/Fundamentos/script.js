console.log('opa')

//console
console.error('Este é um erro!')
console.warn('Este é um aviso!')
console.log('Esta é uma mensagem!')

// variáveis
var x = 10
let y = 15
const z = 20

console.log(x)
console.log(y)
console.log(z)


// tipos de dados
const name = 'Victor'
console.log(name)
console.log(typeof name)

const shitsQty = 4
console.log(shitsQty)
console.log(typeof shitsQty)

const decimal = 12.4
console.log(decimal)
console.log(typeof decimal)

const isApproved = false // true ou false
console.log(isApproved)
console.log(typeof isApproved)

let surname = null
console.log(surname)
console.log(typeof surname)

surname = 'Victor'
console.log(surname)
console.log(typeof surname)

let age
console.log(age)
console.log(typeof age)

age = 26
console.log(age)
console.log(typeof age)

const languages = ['JavaScript', 'PHP', 'Python'] //array
console.log(languages)
console.log(typeof languages)

const user = {email: 'victor@teste.com', password: 'teste123', age:26} //object literals
console.log(user)
console.log(typeof user)


// métodos de string
const fullName = 'Victor Pilar'

console.log(fullName.length)

const stringToArray = fullName.split(' ')

console.log(stringToArray)

console.log(fullName.toLowerCase())

console.log(fullName.toUpperCase())

console.log(fullName.indexOf('Pilar'))

console.log(fullName.slice(0, 6))


// métodos de array
const list = ['a', 'b', 'c', 'd', 'e']

console.log(list.length)

console.log(list[2])

list[5] = 'f'

console.log(list)

console.log(list[list.length -1])

list.push('g')//adiciona no final da lista

console.log(list)

list.pop()//remove um elemento do final da lista

console.log(list)

list.shift()//remove um elemento do inicio da lista

console.log(list)

list.unshift('a')//adiciona um elemento no inicio da lista

console.log(list)


// objetos
const product = {
    name: 'Camisa',
    price: 17.99,
    inStock: true,
    sizes: ['P', 'M', 'G']
}

console.log(product.name)

console.log(product['name'])

const {price, inStock} = product //destructuring

console.log(price)
console.log(inStock)


// JSON - JavaScript Object Notation
