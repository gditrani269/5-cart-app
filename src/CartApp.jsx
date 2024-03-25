import { useReducer, useEffect } from "react";
import { CartView } from "./components/CartView"
import { CatalogView } from "./components/CatalogView"
import { itemsReducer } from "./reducer/itemsReducer";
import { AddProductCart, DeleteProductCart, UpDateQuantityProductCart } from "./reducer/itemsActions";

//defino una estructura inicial de items de productos para inicializar el usestate cartitems
/*const initialCartItems = [
    {
        product: {},
        quantity: 0,
        total: 0
    }
]*/
//inicializo los items por la sesion. el JSON.parse convierte un string a objeto
//si se ejecuta por primera vez como la sesion no tiene nada, paraque initialCartItems no quede vacio lo inicializa con []
const initialCartItems = JSON.parse (sessionStorage.getItem ('cart')) || [];
export const CartApp = () => {

    const [ cartItems, dispatch ] = useReducer (itemsReducer, initialCartItems)

    useEffect (() => {
        //guardamos el objeto cartItems en la sesion cada vez que cambia
        sessionStorage.setItem ('cart', JSON.stringify (cartItems));
    }, [ cartItems])
    
    //para actualizar el valor del array de productos que se realiza en el componente productCard, usamos la siguiente funcion. Esta recibe lo que se selecciona en productCard y lo almacena en product. Lo que hacemos para que esta funcion se ejecute es ir pasandolas a los componentes hijos
    const handlerAddProductCart = (product) => {

        //si un mismo item se selecciona mas de una vez, no se agrega en  cartItems, se incrementa la cantidad del mismo.
        //para detectar si ya habiamos agregamos ese item dentro de cartItems usamos .find

        const hashItem = cartItems.find ((i) => i.product.id === product.id);
        if (hashItem) {//si el item existe actualizamos la cantidad
            dispatch (
                {
                    type: UpDateQuantityProductCart,
                    payload: product,
                }
            );

        } else {//si el item no existe en cartItems lo agregamos a cartItems
            dispatch (
                {
                    type: AddProductCart,
                    payload: product,
                }
            );
        }


    }

//funcion que elimina un item del carro
    const handlerDeleteProductCart = (id) => {
        dispatch (
            {
                type: DeleteProductCart,
                payload: id,
            }
        )
    }

    return (
        <> 

            <div className="container my-4">
                <h3>Cart App</h3>
                <CatalogView handler= { product => handlerAddProductCart (product)}/>

                {/*para solo mostrar el CartView si hay algo que mostrar ponemos la siguiente logica */}
                {/* Si es distinto de  null y menor o igual a cero */}
                { cartItems?.length <= 0 ||
                    (
                        <div className="my-4 w-50">
                            <CartView items ={ cartItems } handlerDelete = {handlerDeleteProductCart}/>
                        </div>
                    )} 

            </div>
        </>
    )
}