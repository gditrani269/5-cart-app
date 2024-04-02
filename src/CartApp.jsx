
import { Routes, Route, Navigate  } from "react-router-dom"
import { CartView } from "./components/CartView"
import { CatalogView } from "./components/CatalogView"
import { useItemsCart } from "./hooks/useItemsCart"
import { NavBar } from "./components/NavBar"
 

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
                <Routes>
                    <Route 
                        path="catalog" 
                        element={ <CatalogView handler= { product => handlerAddProductCart (product)}/> }/>
                    <Route 
                        path="cart" 
                        element={(
                            cartItems?.length <= 0 ?
                            <div className="alert alert-warning">No hay productos en el carrito de compras !!</div>
                            :
                            (
                                <div className="my-4 w-50">
                                    <CartView items ={ cartItems } handlerDelete = {handlerDeleteProductCart}/>
                                </div>
                            )
                        )}/>
                    {/*navega por default hacia el catalogo, cuando se carga la pagina por ejemplo. Eso lo hace con le Navigate */}
                    <Route path="/" element={ <Navigate to={'/catalog'} /> } />
                </Routes>
                

                {/*para solo mostrar el CartView si hay algo que mostrar ponemos la siguiente logica */}
                {/* Si es distinto de  null y menor o igual a cero */}


            </div>
        </>
    )
}