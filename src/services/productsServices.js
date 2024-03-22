import { products } from "../data/products"

export const getProducts = () => {

    return products;
}

export const calculateTotal = (items) => {
    // el ,0 del final inicializa el accumulator en 0
    return items.reduce ((accumulator, item) => accumulator + item.product.price * item.quantity, 0);
}