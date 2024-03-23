import { products } from "../data/products"

export const getProducts = () => {

    return products;
}

//ejemplo de reduce: https://4geeks.com/es/how-to/metodo-reduce-javascript
export const calculateTotal = (items) => {
    // el ,0 del final inicializa el accumulator en 0
    return items.reduce ((accumulator, item) => accumulator + item.product.price * item.quantity, 0);
}