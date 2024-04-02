
import { useItemsCart } from "./hooks/useItemsCart"
import { NavBar } from "./components/NavBar"
import { CartRoutes } from "./routes/CartRoutes"
 

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
            <NavBar />
            <div className="container my-4">
                <h3>Cart App</h3>
                <CartRoutes 
                    cartItems={cartItems} 
                    handlerAddProductCart={handlerAddProductCart}
                    handlerDeleteProductCart={handlerDeleteProductCart}
                />
            </div>
        </>
    )
}