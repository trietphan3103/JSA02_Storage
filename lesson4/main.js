// let user_age = [1, 2, 3];
// console.log( user_age);

// localStorage.setItem("userAge", JSON.stringify(user_age));

// let result = localStorage.getItem("userAge");

// result = JSON.parse( result )

// console.log( result)

// let to_do_list = [
//     "Dạy học",
//     "Ăn trưa",
//     "Xử lý công việc"
// ]

// localStorage.setItem( "to_do_list", JSON.stringify(to_do_list) );


function render_list() {
    let result = localStorage.getItem("to_do_list");
    result = JSON.parse( result );
    
    let list_container = document.getElementById('to-do-list');
    list_container.innerHTML = ''
    for( item of result ) {
        let item_ele = document.createElement('li');
        item_ele.classList.add('to-do-item');
        item_ele.innerHTML = item;
        list_container.appendChild(item_ele);
    }
}
render_list();

let submit_btn = document.querySelector('.submit-btn');
let to_do_input = document.querySelector('.to-do-input');

submit_btn.addEventListener('click', function() {
    let value = to_do_input.value;
    if ( value != '' ) {
        let new_list = localStorage.getItem("to_do_list");
        new_list = JSON.parse( new_list );
        new_list.push(value);
        localStorage.setItem("to_do_list", JSON.stringify(new_list));
        to_do_input.value = '';
        to_do_input.focus();
        render_list();
    }
});


