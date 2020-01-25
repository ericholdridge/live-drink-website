document.addEventListener('DOMContentLoaded', () => {
    const clearCart = document.querySelector('.clear-cart');
    const cartDOM = document.querySelector('.cart');
    const cartOverlay = document.querySelector('.cart-overlay');
    const cartItems = document.querySelector('.cart-items');
    const cartTotal = document.querySelector('.cart-total');
    const cartContent = document.querySelector('.cart-content');
    const productsDOM = document.querySelector('.products-center');

    // Cart
    let cart = [];

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
                        <a href="" data-id=${products[0].id}><i class="fas fa-shopping-cart fa-lg"></i></a>
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
                        <a href="" data-id=${products[1].id}><i class="fas fa-shopping-cart fa-lg"></i></a>
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
                      <a href="" data-id=${products[2].id}><i class="fas fa-shopping-cart fa-lg"></i></a>
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
                      <a href="" data-id=${products[3].id}><i class="fas fa-shopping-cart fa-lg"></i></a>
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
                      <a href="" data-id=${products[4].id}><i class="fas fa-shopping-cart fa-lg"></i></a>
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
                      <a href="" data-id=${products[5].id}><i class="fas fa-shopping-cart fa-lg"></i></a>
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
                      <a href="" data-id=${products[6].id}><i class="fas fa-shopping-cart fa-lg"></i></a>
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
                      <a href="" data-id=${products[7].id}><i class="fas fa-shopping-cart fa-lg"></i></a>
                    </div>
                  </div>
                </div>
                <!-- End card-->                                             
                `;
            productsDOM.innerHTML = result;
        }
    }

    // Local storage
    class Storage {

    }

    const ui = new UI();
    const products = new Products();

    // Get all of the products
    products.getProducts().then(products => ui.displayProducts(products));
});

// 1:45
