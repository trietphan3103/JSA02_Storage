// let a = 3

// let myArray = [4, 5, 7, 8, 9, 1]

// console.log(myArray)

// for( let i = 0; i < myArray.length; i++ ) {
//     console.log( "Giá trị của phần tử thứ ", i, " là: ", myArray[i] )
// }

// myArray[2] = 6;


// console.log(myArray)




// myArray.splice(2, 1, 7, 8);


// console.log(myArray)

// console.log(myArray.length) // => đếm số phần tử

// myArray.push(7) // => thêm phần tử vào cuối mảng

// console.log(myArray)

// myArray.pop() // => xóa phần tử cuối cùng

// console.log(myArray)

// myArray.unshift(9) // => thêm phần tử vào đầu mảng

// console.log(myArray)

// myArray.shift() // => xóa phần tử đầu tiên

// console.log(myArray)


// let dog = {
//     name: 'Alaska',
//     age: 4
// }

// dog.name = 'Chihuahua'

// dog.action = 'Walk'

// delete ( dog.action )

// console.log(dog)

let cat = new Object({
    name: 'Tom',
    age: 3,
    enemy: {
        name: 'Alaska',
        age: 5
    }
}
);

console.log(cat)

let dog1 = ["Alaska", 4]
let dog2 = ["Corgi", 5]

let dogs = [dog1, dog2]

console.log(dogs)

console.log( dogs[0][0] )


let gioTraiCay = [
    ['xoai', 2],
    ['dua hau', 3]
]

console.log('Giỏ trái cây có:')
for( let i = 0; i < gioTraiCay.length; i++ ) {
    console.log( gioTraiCay[i][1] + ' trái ' + gioTraiCay[i][0] )
}



