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

// let cat = new Object({
//     name: 'Tom',
//     age: 3,
//     enemy: {
//         name: 'Alaska',
//         age: 5
//     }
// }
// );

// console.log(cat)

// let dog1 = ["Alaska", 4]
// let dog2 = ["Corgi", 5]

// let dogs = [dog1, dog2]

// console.log(dogs)

// console.log( dogs[0][0] )


// let gioTraiCay = [
//     ['xoai', 2],
//     ['dua hau', 3]
// ]

// console.log('Giỏ trái cây có:')
// for( let i = 0; i < gioTraiCay.length; i++ ) {
//     console.log( gioTraiCay[i][1] + ' trái ' + gioTraiCay[i][0] )
// }

// let cd = {
//     name: 'Mortal Kombat',
//     price: '$300',
//     img_url: './motal_kombat'
// }

// for ( key in cd ) {
//     console.log(key + ': ' + cd[key]);
// }

// let myArray = [4, 5, 7, 8, 9, 1]

// for ( value of myArray ) {
//     console.log(value);
// }

let cd_list = [
    {
        name: 'Mortal Kombat',
        price: '$300',
        img_url: './mortal_kombat.jfif',
        sold_out: true,
    },
    {
        name: 'Zenda',
        price: '$400',
        img_url: './zenda.jpg',
        sold_out: false,
    },
    {
        name: 'The Witcher',
        price: '$200',
        img_url: './the_witcher.jfif',
        sold_out: false,
    },
    {
        name: 'The Witcher 2',
        price: '$200',
        img_url: './the_witcher.jfif',
        sold_out: false,
    },
    {
        name: 'The Witcher 3',
        price: '$200',
        img_url: './the_witcher.jfif',
        sold_out: false,
    }
]


let cd_list_ele = document.getElementById('cd-list');

for (cd of cd_list) {
    // Tạo element
    let cd_item_ele = document.createElement('div');

    // Add class cho element
    if ( cd.sold_out == true ) {
        cd_item_ele.classList.add('sold-out')
    }
    cd_item_ele.classList.add('cd-item');

    // Thay đổi innerHtml 
    cd_item_ele.innerHTML = 
    `<div class="cd-img">
        <img src="${cd.img_url}" alt="">
    </div>
    <p class="cd-name">${cd.name}</p>
    <p class="price">${cd.price}</p>
    <div class="btn-add-to-cart">
        ADD TO CART
    </div>`

    // Thêm element vào list
    cd_list_ele.appendChild(cd_item_ele);
}


