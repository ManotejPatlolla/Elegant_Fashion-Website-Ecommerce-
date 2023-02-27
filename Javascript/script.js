// cart page starts here
const cart = {
    addToCart: function (product) {
        let newProduct = product;
        if(typeof product === "string") {
            newProduct = JSON.parse(decodeURI(product));
        }
        const myCartItems = this.getAllItems();
        const filteredItem = myCartItems.filter(item => item.id == newProduct.id);
        console.log(filteredItem);

        if (filteredItem.length === 1) {
            filteredItem[0].qty += 1;
        } else {
            myCartItems.push({
                ...newProduct,
                qty: 1
            });
        }
        localStorage.setItem('MY_CART', JSON.stringify(myCartItems));
    },
    removeFromCart: function (id) {
        const myCartItems = this.getAllItems();
        const filteredItem = myCartItems.filter(item => item.id != id);

        localStorage.setItem('MY_CART', JSON.stringify(filteredItem));
    },
    getAllItems: function () {
        return JSON.parse(localStorage.getItem('MY_CART')) || [];
    },
    removeAllItems: function () {
        localStorage.removeItem('MY_CART');
    },

    incrementQty: function(id){
        const myCartItems = this.getAllItems();
        const filteredItem = myCartItems.filter(item => item.id == id);

        if(filteredItem.length === 1 && filteredItem[0].qty < 10){
            filteredItem[0].qty += 1;
        }
        localStorage.setItem('MY_CART', JSON.stringify(myCartItems));
    },

    decrementQty: function(id){
        const myCartItems = this.getAllItems();
        const filteredItem = myCartItems.filter(item => item.id == id);

        if(filteredItem.length === 1 && filteredItem[0].qty > 1){
            filteredItem[0].qty -= 1;
        }
        localStorage.setItem('MY_CART', JSON.stringify(myCartItems));
    }
}



function myfunc(){
    document.getElementById('faram').style.display = 'block';
    
}

















