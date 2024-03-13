import { useState } from "react";
import { CartView } from "./components/CartView"
import { CatalogView } from "./components/CatalogView"

//defino una estructura inicial de items de productos para inicializar el usestate cartitems
const initialCartItems = [
/*    {
        product: {},
        quantity: 0,
        total: 0
    }*/
]
export const CartApp = () => {

    //vamos a manejar el estado de los items en el useState cartItems
    const [ cartItems, serCartItems ] = useState (initialCartItems);

    //para actualizar el valor del array de productos que se realiza en el componente productCard, usamos la siguiente funcion. Esta recibe lo que se selecciona en productCard y lo almacena en product. Lo que hacemos para que esta funcion se ejecute es ir pasandolas a los componentes hijos
    const handlerAddProductCart = (product) => {
        serCartItems ([
            ...cartItems,
            {
                product: product,
                quantity: 1,
                total: product.price * 1
            }
        ]);
    }

    return (
        <> 

            <div className="container">
                <h3>Cart App</h3>
                <CatalogView handler= { product => handlerAddProductCart (product)}/>

                <div className="my-4 w-50">
                    <CartView items ={ cartItems } />
                </div>
            </div>
        </>
    )
}