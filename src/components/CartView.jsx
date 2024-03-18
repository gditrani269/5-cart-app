
export const CartView = ({ handlerDelete, items, total }) => {

    const OnDeleteProduct = (id) => {
//        console.log ('eliminando producto')
        handlerDelete (id);
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
    </div>
  )
}
