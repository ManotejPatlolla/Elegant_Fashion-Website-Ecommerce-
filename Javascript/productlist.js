let productDataUrl = 'https://my-json-server.typicode.com/ManotejPatlolla/Json_server/db' 

async function getProducts(productDataUrl) {
    fetch(productDataUrl)
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            let productsData = data.product;
            console.log(productsData);
            let cards = ' ';

            productsData.forEach((product,index) => {
                // console.log(product)
                cards = cards + 

                
            `<div class="product text-center  my-4 py-4  col-lg-3 col-md-4 col-sm-6 col-6">
            <img class="img-fluid mb-2" src="${product.source}" alt="">
            <div class="star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star bstar"></i>
            </div>
            <h5 class="p-name">${product.name}</h5>
            <h4 class="p-price"> ${product.price}</h4>
            <button  onclick="cart.addToCart('${encodeURI(JSON.stringify(product))}')"   class="buy-btn">Buy Now</button>
        </div>`;





            });

            document.getElementById('product').innerHTML = cards;

            // console.log(cards);

        });

}
getProducts(productDataUrl)
