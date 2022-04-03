export default class CartItem {
    constructor(product, quantity = 1) {

        if (product.price === undefined) throw new Error("product does not have price !");
        this.product = product;
        this.quantity = quantity;
    }

    getPrice() {
        return this.product.price * this.quantity;
    }

    increaseQuantity(value = 1) {
        this.quantity += value
    }


}