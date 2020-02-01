document.addEventListener('DOMContentLoaded', () => {
    const clearCart = document.querySelector('.clear-cart');
    const cartDOM = document.querySelector('.cart');
    const cartOverlay = document.querySelector('.cart-overlay');
    let cartItems = document.querySelector('.cart-items');
    const cartTotal = document.querySelector('.cart-total');
    const cartContent = document.querySelectorAll('.cart-content');
    console.log(cartContent);
    const productsDOM = document.querySelector('.products-center');
    const btns = document.querySelectorAll('.bag-btn');
    const shoppingScrolled = document.getElementById('shoppingScrolled');
    const cartContentFixed = document.querySelector('.cart-content-fixed');

    // Cart
    let cart = [];
    // Buttons
    let buttonsDOM = [];

    // Getting the products
    class Products{
        async getProducts(){
            try {
                let result = await fetch('products.json');
                let data = await result.json();
                let products = data.items;
                products = products.map(item => {
                    const {title, price} = item.fields;
                    const {id} = item.sys;
                    const image = item.fields.image.fields.file.url;
                    return {title,price,id,image}
                });
                return products;
            } catch(error) {
                console.log(error);
            }
        }
    }

    // Display products
      class UI {
        displayProducts(products) {
            let result = '';
                result += `
                <!-- card -->
                <div class="card-flavor bg-flavorBgColor w-72 py-6 rounded-lg mt-6 relative sm:w-64 lg:py-10 shadow-none hover:shadow-2xl transition-500 transition-ease-in-out">
                    <span class="absolute right-0 mr-4 rounded-lg bg-black px-3 text-white bg-red uppercase font-bold text-md">sale</span>
                    <div class="flex justify-center">
                        <img class="block h-48 w-32 object-contain" src=${products[0].image} />
                    </div>
                    <h3 class="text-center uppercase font-medium pt-6">${products[0].title}</h3>
                    <div class="pricing flex justify-center">
                        <p class="mr-3 text-gray line-through">$30.00</p>
                        <p class="text-green">$${products[0].price}</p>
                    </div>
                    <div class="cart opacity-100 lg:opacity-25 flex justify-center pt-4">
                    <div class="search bg-yellow w-12 h-12 rounded-full flex justify-center items-center mr-6">
                        <a href=""><i class="fas fa-search fa-lg"></i></a>
                    </div>
                    <div class="bg-green w-12 h-12 rounded-full flex justify-center items-center text-white">
                        <a href="" data-id=${products[0].id} class="bag-btn"><i class="fas fa-shopping-cart fa-lg"></i></a>
                    </div>
                    </div>
                </div>
                <!-- End card-->
                <!-- card -->
                <div class="card-flavor bg-flavorBgColor w-72 py-6 rounded-lg mt-6 relative sm:w-64 lg:ml-4 lg:py-10 shadow-none hover:shadow-2xl transition-500 transition-ease-in-out">
                    <span class="absolute right-0 mr-4 rounded-lg px-3 text-white bg-flavorGray uppercase font-bold text-md">new</span>
                    <div class="flex justify-center">
                        <img class="block h-48 w-32 object-contain" src=${products[1].image} alt="" />
                    </div>
                    <h3 class="text-center uppercase font-medium pt-6">${products[1].title}</h3>
                    <div class="pricing flex justify-center">
                        <p class="text-green">$${products[1].price}</p>
                    </div>
                    <div class="cart opacity-100 lg:opacity-25 wrap flex justify-center pt-4 lg:flex">
                    <div class="search bg-yellow w-12 h-12 rounded-full flex justify-center items-center mr-6">
                        <a href=""><i class="fas fa-search fa-lg"></i></a>
                    </div>
                    <div class="bg-green w-12 h-12 rounded-full flex justify-center items-center text-white">
                        <a href="" data-id=${products[1].id} class="bag-btn"><i class="fas fa-shopping-cart fa-lg"></i></a>
                    </div>
                    </div>
                </div>
                <!-- End card-->
                <!-- card -->
                <div class="card-flavor bg-flavorBgColor w-72 py-6 rounded-lg mt-6 relative sm:w-64 lg:ml-4 lg:py-10 shadow-none hover:shadow-2xl transition-500 transition-ease-in-out">
                  <div class="flex justify-center">
                    <img class="block h-48 w-32 object-contain" src=${products[2].image} alt="" />
                  </div>
                  <h3 class="text-center uppercase font-medium pt-6">${products[2].title}</h3>
                  <div class="pricing flex justify-center">
                    <p class="text-green">$${products[2].price}</p>
                  </div>
                  <div class="cart opacity-100 lg:opacity-25 wrap flex justify-center pt-4 lg:flex">
                    <div class="search bg-yellow w-12 h-12 rounded-full flex justify-center items-center mr-6">
                      <a href=""><i class="fas fa-search fa-lg"></i></a>
                    </div>
                    <div class="bg-green w-12 h-12 rounded-full flex justify-center items-center text-white">
                      <a href="" data-id=${products[2].id} class="bag-btn"><i class="fas fa-shopping-cart fa-lg"></i></a>
                    </div>
                  </div>
                </div>
                <!-- End card-->
                <!-- card -->
                <div class="card-flavor bg-flavorBgColor w-72 py-6 rounded-lg mt-6 relative sm:w-64 xl:ml-4 lg:py-10 shadow-none hover:shadow-2xl transition-500 transition-ease-in-out">
                  <span class="absolute right-0 mr-4 bg-flavorGray rounded-lg px-3 text-white bg-red uppercase font-bold text-md">new</span>
                  <div class="flex justify-center">
                    <img class="block h-48 w-32 object-contain" src=${products[3].image} alt="" />
                  </div>
                  <h3 class="text-center uppercase font-medium pt-6">${products[3].title}</h3>
                  <div class="pricing flex justify-center">
                    <p class="text-green">$${products[3].price}</p>
                  </div>
                  <div class="cart opacity-100 lg:opacity-25 wrap flex justify-center pt-4 lg:flex">
                    <div class="search bg-yellow w-12 h-12 rounded-full flex justify-center items-center mr-6">
                      <a href=""><i class="fas fa-search fa-lg"></i></a>
                    </div>
                    <div class="bg-green w-12 h-12 rounded-full flex justify-center items-center text-white">
                      <a href="" data-id=${products[3].id} class="bag-btn"><i class="fas fa-shopping-cart fa-lg"></i></a>
                    </div>
                  </div>
                </div>
                <!-- End card-->
                <!-- card -->
                <div class="card-flavor bg-flavorBgColor w-72 py-6 rounded-lg mt-6 relative sm:w-64 lg:ml-4 xl:ml-0 lg:py-10 shadow-none hover:shadow-2xl transition-500 transition-ease-in-out">
                  <span class="absolute right-0 mr-4 rounded-lg bg-black px-3 text-white bg-flavorGray uppercase font-bold text-md">new</span>
                  <div class="flex justify-center">
                    <img class="block h-48 w-32 object-contain" src=${products[4].image} alt="" />
                  </div>
                  <h3 class="text-center uppercase font-medium pt-6">${products[4].title}</h3>
                  <div class="pricing flex justify-center">
                    <p class="text-green">$${products[4].price}</p>
                  </div>
                  <div class="cart opacity-100 lg:opacity-25 wrap flex justify-center pt-4 lg:flex">
                    <div class="search bg-yellow w-12 h-12 rounded-full flex justify-center items-center mr-6">
                      <a href=""><i class="fas fa-search fa-lg"></i></a>
                    </div>
                    <div class="bg-green w-12 h-12 rounded-full flex justify-center items-center text-white">
                      <a href="" data-id=${products[4].id} class="bag-btn"><i class="fas fa-shopping-cart fa-lg"></i></a>
                    </div>
                  </div>
                </div>
                <!-- End card-->
                <!-- card -->
                <div class="card-flavor bg-flavorBgColor w-72 py-6 rounded-lg mt-6 relative sm:w-64 lg:ml-4 lg:py-10 shadow-none hover:shadow-2xl transition-500 transition-ease-in-out">
                  <!-- <span class="absolute right-0 mr-4 rounded-lg bg-black px-4 text-white bg-red uppercase font-bold text-md">sale</span> -->
                  <div class="flex justify-center">
                    <img class="block h-48 w-32 object-contain" src=${products[5].image} alt="" />
                  </div>
                  <h3 class="text-center uppercase font-medium pt-6">${products[5].title}</h3>
                  <div class="pricing flex justify-center">
                    <p class="text-green">$${products[5].price}</p>
                  </div>
                  <div class="cart opacity-100 lg:opacity-25 wrap flex justify-center pt-4 lg:flex">
                    <div class="search bg-yellow w-12 h-12 rounded-full flex justify-center items-center mr-6">
                      <a href=""><i class="fas fa-search fa-lg"></i></a>
                    </div>
                    <div class="bg-green w-12 h-12 rounded-full flex justify-center items-center text-white">
                      <a href="" data-id=${products[5].id} class="bag-btn"><i class="fas fa-shopping-cart fa-lg"></i></a>
                    </div>
                  </div>
                </div>
                <!-- End card-->
                <!-- card -->
                <div class="card-flavor bg-flavorBgColor w-72 py-6 rounded-lg mt-6 relative sm:w-64 xl:ml-4 lg:py-10 shadow-none hover:shadow-2xl transition-500 transition-ease-in-out">
                  <span class="absolute right-0 mr-4 rounded-lg bg-black px-3 text-white bg-red uppercase font-bold text-md">sale</span>
                  <div class="flex justify-center">
                    <img class="block h-48 w-32 object-contain" src=${products[6].image} alt="" />
                  </div>
                  <a href=""><h3 class="text-center uppercase font-medium pt-6">${products[6].title}</h3></a>
                  <div class="pricing flex justify-center">
                    <p class="mr-3 text-gray line-through">$30.00</p>
                    <p class="text-green">$${products[6].price}</p>
                  </div>
                  <div class="cart opacity-100 lg:opacity-25 wrap flex justify-center pt-4 lg:flex">
                    <div class="search bg-yellow w-12 h-12 rounded-full flex justify-center items-center mr-6">
                      <a href=""><i class="fas fa-search fa-lg"></i></a>
                    </div>
                    <div class="bg-green w-12 h-12 rounded-full flex justify-center items-center text-white">
                      <a href="" data-id=${products[6].id} class="bag-btn"><i class="fas fa-shopping-cart fa-lg"></i></a>
                    </div>
                  </div>
                </div>
                <!-- End card-->
                <!-- card -->
                <div class="card-flavor bg-flavorBgColor w-72 py-6 rounded-lg mt-6 relative sm:w-64 lg:ml-4 lg:py-10 shadow-none hover:shadow-2xl transition-500 transition-ease-in-out">
                  <span class="absolute right-0 mr-4 rounded-lg bg-black px-3 text-white bg-red uppercase font-bold text-md">sale</span>
                  <div class="flex justify-center">
                    <img class="block h-48 w-32"  src=${products[7].image} alt="" />
                  </div>
                  <h3 class="text-center uppercase font-medium pt-6">${products[7].title}</h3>
                  <div class="pricing flex justify-center">
                    <p class="text-green">$${products[7].price}</p>
                  </div>
                  <div class="cart opacity-100 lg:opacity-25 wrap flex justify-center pt-4 lg:flex">
                    <div class="search bg-yellow w-12 h-12 rounded-full flex justify-center items-center mr-6">
                      <a href=""><i class="fas fa-search fa-lg"></i></a>
                    </div>
                    <div class="bg-green w-12 h-12 rounded-full flex justify-center items-center text-white">
                      <a href="" data-id=${products[7].id} class="bag-btn"><i class="fas fa-shopping-cart fa-lg"></i></a>
                    </div>
                  </div>
                </div>
                <!-- End card-->                                             
                `;
            productsDOM.innerHTML = result;
        }
        getBagButtons(){
          // Puts buttons into an array
          const buttons = [...document.querySelectorAll('.bag-btn')];
          buttonsDOM = buttons;
          buttons.forEach(button => {
            let id = button.dataset.id;
            let inCart = cart.find(item => item.id === id);
            if(inCart) {
              button.innertext = "In Cart";
              button.disabled = true;
            }
              button.addEventListener('click', (event) => {
                event.preventDefault();
                event.target.innertext = "In Cart";
                event.target.disabled = true;
                // Get product from products
                let cartItem = {...Storage.getProduct(id), amount:1}; 
                // Add product to the cart
                cart = [...cart, cartItem];
                // Save the cart in local storage
                Storage.saveCart(cart);
                // Set cart values
                this.setCartValues(cart);
                // Display cart item
                this.addCartItem(cartItem);
                // Show the cart
              });
          });
        }
        setCartValues(cart) {
          let tempTotal = 0;
          let itemsTotal = 0;
          cart.map(item => {
            tempTotal += item.price * item.amount;
            itemsTotal += item.amount;
          })
          cartTotal.innerText = parseFloat(tempTotal.toFixed(2));
          cartItems.innerText = itemsTotal;
          if(shoppingScrolled.classList.contains('cart-items')) {
            shoppingScrolled.innerText = cartItems.innerText;
          }
        }
        addCartItem(item) {
          for(let i = 0; i < cartContent.length; i++){
            const div = document.createElement('div');
            div.classList.add('cart-items');
            div.classList.add('flex');
            div.classList.add('items-center');
            div.innerHTML = `
            <img class="block h-32" src=${item.image} alt="">
            <div class="px-2 py-12 text-left">
              <h4 class="uppercase">${item.title}</h4>
              <h5 class="text-white">$${item.price}</h5>
              <span class="remove-item text-sm text-gray" data-id=${item.id}><a href="">remove</a></span>
            </div>
            <div class="mx-4 text-black flex flex-col justify-center items-center">
              <a href=""><i class="fas fa-chevron-up" data-id=${item.id}></i></a>
              <p class="item-amount text-white">${item.amount}</p>
              <a href=""><i class="fas fa-chevron-down" data-id=${item.id}></i></a>
            </div>
            `;
              cartContent[i].appendChild(div);
          }
        }
      }

    // Local storage
    class Storage {
      static saveProducts(products) {
        localStorage.setItem("products", JSON.stringify(products));
      }
      static getProduct(id) {
        let products = JSON.parse(localStorage.getItem('products'));
        return products.find(product => product.id === id);
      }
      static saveCart(cart) {
        localStorage.setItem('cart', JSON.stringify(cart));
      }
    }

    const ui = new UI();
    const products = new Products();

    // Get all of the products
    products.getProducts().then(products => {
      ui.displayProducts(products);
      Storage.saveProducts(products);
    }).then(() => {
      ui.getBagButtons();
    });
});

// 1:45
