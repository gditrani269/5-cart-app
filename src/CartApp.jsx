
import { CartView } from "./components/CartView"
import { CatalogView } from "./components/CatalogView"
import { useItemsCart } from "./hooks/useItemsCart"

//defino una estructura inicial de items de productos para inicializar el usestate cartitems
/*const initialCartItems = [
    {
        product: {},
        quantity: 0,
        total: 0
    }
]*/

export const CartApp = () => {

    const { cartItems, handlerAddProductCart, handlerDeleteProductCart} = useItemsCart ();
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