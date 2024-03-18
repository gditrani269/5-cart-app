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

    const [ totalCompra, serTotalCompra] = useState (0);
    //vamos a manejar el estado de los items en el useState cartItems
    const [ cartItems, serCartItems ] = useState (initialCartItems);

    //para actualizar el valor del array de productos que se realiza en el componente productCard, usamos la siguiente funcion. Esta recibe lo que se selecciona en productCard y lo almacena en product. Lo que hacemos para que esta funcion se ejecute es ir pasandolas a los componentes hijos
    const handlerAddProductCart = (product) => {

        serTotalCompra (
            totalCompra + product.price
        );
        //si un mismo item se selecciona mas de una vez, no se agrega en  cartItems, se incrementa la cantidad del mismo.
        //para detectar si ya habiamos agregamos ese item dentro de cartItems usamos .find

        const hashItem = cartItems.find ((i) => i.product.id === product.id);
        if (hashItem) {//si el item existe actualizamos la cantidad
/*            serCartItems ([
                //esta linea ...cartItems.filter lo que hace es quitar el producto del arreglo e inmediatamente lo agrega mas abajo pero con la quantity incrementada
                ...cartItems.filter ( (i) => i.product.id !== product.id),
                {
                    product,
                    quantity: hashItem.quantity + 1,
                }
            ])*/
                //otra forma de hacer lo mismo que antes pero con .map es
            serCartItems (
                //esta linea ...cartItems.map lo que hace es actulizar el item cuyo id coincide con uno ya existente en cartItems
                //detalle: con el .map obtenemos el item y adentro preguntamos si el producto existe. Si existe tomamos la quantity y la incrementamos. Y el map siempre devuelve un arreglo con los cambios.
                cartItems.map ( (i) => {
                    if (i.product.id === product.id) {
                        i.quantity = i.quantity + 1;
                    }
                    return i; //usamos return para devolver el cambio dentro del arreglo
                })
            )

        } else {//si el item no existe en cartItems lo agregamos a cartItems
            serCartItems ([
                ...cartItems,
                {
                    product,
                    quantity: 1,
                }
            ]);
        }


    }

//funcion que elimina un item del carro
    const handlerDeleteProductCart = (id) => {
        //para calcular el total cuando se elimina un item del carrito:
        //buscamos en cartItems el id a eliminar y guardamos en hashItem el objeto
        //despues retamos del total el precio por la cantidad de items de ese producto
        const hashItem = cartItems.find ((i) => i.product.id === id);
        console.log ("hashItem: " , hashItem)
        if (hashItem) {
            serTotalCompra (
                totalCompra - hashItem.product.price * hashItem.quantity
            )};
            
        serCartItems ([
            ...cartItems.filter ( (i) => i.product.id !== id)
        ]);
    }

    return (
        <> 

            <div className="container">
                <h3>Cart App</h3>
                <CatalogView handler= { product => handlerAddProductCart (product)}/>

                {/*para solo mostrar el CartView si hay algo que mostrar ponemos la siguiente logica */}
                {/* Si es distinto de  null y menor o igual a cero */}
                { cartItems?.length <= 0 ||
                    (
                        <div className="my-4 w-50">
                            <CartView items ={ cartItems } handlerDelete = {handlerDeleteProductCart} total = { totalCompra }/>
                        </div>
                    )} 

            </div>
        </>
    )
}