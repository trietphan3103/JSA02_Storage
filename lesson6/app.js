let products = {
    data: [
        {
            name: "MATRIX 1999 DECK",
            price: "780.000đ - 1.470.000đ",
            image: "images/matrix-1999-1.jpg"
        },

        {
            name: "RAEDA DECK",
            price: "780.000đ - 1.470.000đ",
            image: "images/Raeda-Deck.jpg"
        },

        {
            name: "MUSTY DECK",
            price: "780.000đ - 1.470.000đ",
            image: "images/Musty-Deck.jpg"
        },

        {
            name: "TRISTIQUE DECK",
            price: "780.000đ - 1.470.000đ",
            image: "images/Tristique-deck.jpg"
        },

        {
            name: "FIELD TRIP DECK",
            price: "780.000đ - 1.470.000đ",
            image: "images/Fied-Trip-deck.jpg"
        },

        {
            name: "TARO RAINBOW LOGO DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/web-5.jpg"
        },

        {
            name: "NEON RAINBOW LOGO DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/web-1.jpg"
        },

        {
            name: "ORANAGE RAINBOW LOGO DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/web-2.jpg"
        },

        {
            name: "BLUE RAINBOW LOGO DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/web-3.jpg"
        },

        {
            name: "WHITE RAINBOW LOGO DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/web-4.jpg"
        },

        {
            name: "CUTIS MODEL DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/cutis.jpg"
        },

        {
            name: "CAM VU MODEL DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/cam-vu.jpg"
        },

        {
            name: "SON NGUYEN MODEL DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/son-nguyen.jpg"
        },
    ]
}

for (let key in products.data) {
    let items = products.data[key]

    // let card = document.createElement("div")
    // card.classList.add("card")

    // let imgContainer = document.createElement("div")
    // imgContainer.classList.add("image-container")

    // let image = document.createElement("img")
    // image.setAttribute("src", items.image)
    // imgContainer.appendChild(image)
    // card.appendChild(imgContainer)

    // let container = document.createElement("div")
    // container.classList.add("container")

    // let name = document.createElement("h5");
    // name.classList.add("product-name");
    // name.innerText = items.name.toUpperCase();
    // container.appendChild(name);

    // let price = document.createElement("h6");
    // price.innerHTML = "<b>Price:</b> " + items.price;
    // container.appendChild(price);

    // let btn = document.createElement("button")
    // btn.setAttribute("onclick", "addToCart()")
    // btn.innerHTML = "Thêm vào giỏ hàng"
    // container.appendChild(btn)
  
    // card.appendChild(container);
    
    let card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `<div class="image-container">
        <img src="${items.image}">
        </div>
        <div class="container">
        <h5 class="product-name">${items.name}</h5>
        <h6><b>Price:</b>${items.price}</h6>
        <button onclick="addToCart(${key})">Thêm vào giỏ hàng</button>
        </div>`
    document.getElementById("products").appendChild(card);
}

for (let items of products.data){
    let product = JSON.parse(localStorage.product)
    product.push({
        name: items.name,
        price: items.price , 
        images: items.image
    })

    localStorage.setItem("product", JSON.stringify(product))
}


const addToCart = ( key ) => {
    // get item has key param
    let item = products.data[key];

    let cart = localStorage.getItem("cart")
    cart = JSON.parse(cart);
    if  ( cart == null ) {
        cart = [
            {
                product: item,
                quantity: 1
            }
        ];
        localStorage.setItem("cart", JSON.stringify(cart))
    } else {
        for ( product_item of cart ) {
            if ( product_item.product.name == item.name ) {
                // Xử lý trùng item đã thêm vào giỏ hàng
                product_item.quantity += 1;
                localStorage.setItem("cart", JSON.stringify(cart))
                return;
            }
        }
        cart.push( {
            product: item,
            quantity: 1
        } );
        localStorage.setItem("cart", JSON.stringify(cart))
    }
}