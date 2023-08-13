import { getShoppingCart } from "./fakedb";

const cartProducts = async () => {
    const allCartProducts = await fetch('fakeData/products.json');
    const products = await allCartProducts.json();
    const storedCart = getShoppingCart();
    const savedCart = [];
    for (const id in storedCart) {
        const addedProduct = products.find(pd => pd.id === id);
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
    }
    return savedCart;
}

export default cartProducts;