import { useEffect, useState } from "react";
import { calculateTotal } from "../services/productsServices";
import { useNavigate } from "react-router-dom";

export const CartView = ({ handlerDelete, items }) => {

    const [ total, setTotal ] = useState (0);
    const navigate = useNavigate ();

    //este useEffect se va a ejecutar la priemra vez que se ejecute y luego cada vez que haya un cambio en items, eso se le indica al final poniendo items entre []
    useEffect (() => {
        setTotal ( calculateTotal (items) );
        //guardamos el objeto items en la sesion cada vez que cambia
        //Comentamos el sessionStorage ya que aca hace que se mantenga el ultimo item cuando le damos f5 auqneu lo hayamos eliminado previamente
        //sessionStorage.setItem ('cart', JSON.stringify (items));
    }, [ items])

    const OnDeleteProduct = (id) => {
//        console.log ('eliminando producto')
        handlerDelete (id);
    }

    const onCatalog = () => {
        navigate ('/catalog');
    }
  return (
    <div>
        <h3>carro de compras</h3>
        <table className="table table-hover table-striped">
            <thead>
                <tr>
                    <th>nombre</th>
                    <th>precio</th>
                    <th>cantidad</th>
                    <th>total</th>
                    <th>eliminar</th>
                </tr>
            </thead>
            <tbody>
                {items.map (item => (                
                    <tr key={ item.product.id }>
                        <td>{ item.product.name }</td>
                        <td>{ item.product.price }</td>
                        <td>{ item.quantity }</td>
                        <td>{ item.product.price * item.quantity }</td>
                        {/*con el botom eliminar llamo a la funcion OnDeleteProduct y le paso como parametro solo el id*/}
                        <td><button
                            className="btn btn-danger"
                            onClick={() => OnDeleteProduct (item.product.id)}>eliminar</button></td>
                    </tr>
                ))}
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan="3" className="text-end fw-bold">Total</td>
                    <td colSpan="2" className="text-end fw-bold">{ total }</td>
                </tr>
            </tfoot>
        </table>
        <button 
            className="btn btn-success"
            onClick={onCatalog}>
            Seguir Comprando
        </button>
    </div>
  )
}
