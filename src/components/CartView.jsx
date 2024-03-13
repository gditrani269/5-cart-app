
export const CartView = ({ items }) => {
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
                        <td>eliminar</td>
                    </tr>
                ))}
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan="3" className="text-end fw-bold">Total</td>
                    <td colSpan="2" className="text-end fw-bold">12345</td>
                </tr>
            </tfoot>
        </table>
    </div>
  )
}
