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


// function render_list() {
//     let result = localStorage.getItem("to_do_list");
//     result = JSON.parse( result );
    
//     let list_container = document.getElementById('to-do-list');
//     list_container.innerHTML = ''
//     for( item of result ) {
//         let item_ele = document.createElement('li');
//         item_ele.classList.add('to-do-item');
//         item_ele.innerHTML = item;
//         list_container.appendChild(item_ele);
//     }
// }
// render_list();

// let submit_btn = document.querySelector('.submit-btn');
// let to_do_input = document.querySelector('.to-do-input');

// submit_btn.addEventListener('click', function() {
//     let value = to_do_input.value;
//     if ( value != '' ) {
//         let new_list = localStorage.getItem("to_do_list");
//         new_list = JSON.parse( new_list );
//         new_list.push(value);
//         localStorage.setItem("to_do_list", JSON.stringify(new_list));
//         to_do_input.value = '';
//         to_do_input.focus();
//         render_list();
//     }
// });

let family = [["Bố", "58 tuổi"], ["mẹ", '40 tuổi']];

for( member of family ) {
    console.log("Vị trí: ", member[0] )
    console.log('tuổi', member[1])
}

function printRectangle( n ) {
    let i = 1;
    let count_print = 1
    while ( i <= n ) {
        if ( i == 1 || i == n ) {
            for( let j = 1; j <= count_print; j++ ) {
                document.write( '*' );
            }
        } else {
            document.write( '*' );
            for( let j = 1; j <= count_print; j++ ) {
                document.write( '&nbsp;' );
            }
            document.write( '*' );
        }
        document.write('<br>');
        i++;
        count_print += 2;
    }
}

// printRectangle(5)

// lesson 5

// let user_email_list = ['admin@gmail.com', 'user@gmail.com'];
// localStorage.setItem( "user_email_list", JSON.stringify(user_email_list) );

// let user_password_list = ['admin123', 'user123'];
// localStorage.setItem( "user_password_list", JSON.stringify(user_password_list) );

// let login_form = document.getElementById('login-form');
// if ( login_form !== '' ) {
//     login_form.addEventListener('submit', function () {
//         // lấy input
//         let email = document.querySelector('.email-input').value;
//         let password = document.querySelector('.password-input').value;
    
//         // Lấy data từ local storage
//         let user_email_list = localStorage.getItem("user_email_list");
//         user_email_list = JSON.parse( user_email_list );
    
//         let user_password_list = localStorage.getItem("user_password_list");
//         user_password_list = JSON.parse( user_password_list );
    
//         for( key in user_email_list ) {
//             if ( email == user_email_list[key] && password == user_password_list[key] ) {
//                 alert('Đăng nhập thành công');
//             }
//         }
    
//         alert("Đăng nhập không thành công");
//     })
// }


let register_form = document.getElementById('register-form');

register_form.addEventListener('submit', function () {
    // lấy input
    let email = document.querySelector('.email-input').value;
    let password = document.querySelector('.password-input').value;
    let repassword = document.querySelector('.repassword-input').value;

    // Lấy data từ local storage
    let user_email_list = localStorage.getItem("user_email_list");
    user_email_list = JSON.parse( user_email_list );

    let user_password_list = localStorage.getItem("user_password_list");
    user_password_list = JSON.parse( user_password_list );

    if ( password != repassword ) {
        alert('Mật khẩu không trùng khớp');
    } else {
        let exist_email = false;
        for( key in user_email_list ) {
            if ( email == user_email_list[key] ) {
                alert('Email đã tồn tại');
                exist_email = true;
            }
        }

        if ( exist_email == false ) {
            user_email_list.push(email);
            user_password_list.push(password);
            localStorage.setItem( "user_email_list", JSON.stringify(user_email_list) );
            localStorage.setItem( "user_password_list", JSON.stringify(user_password_list) );
            alert("Đăng ký thành công");
        }
    }


})






