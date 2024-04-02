import { useNavigate } from "react-router-dom";

export const ProductCard = ({handler, id, name, description, price}) => {

    const navigate = useNavigate ();

    //esta funcion le debe pasar la info de producto a CatalogView que es el padre.
    const onAddProduct = (product) => {
        console.log (product);
        //aca se emite el product a la funcion que esta en el padre (handlerAddProductCart)
        handler (product);
        navigate ('/cart');
    }
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{ name }</h5>
                    <p className="card-text">{ description }</p>
                    <p className="card-text">{ price }</p>
                    {/* Cuando pulse el boton tengo que agregar en el usestate el producto para que persista en la SPA*/}
                    {/* el boton debe pasar la info de producto al padre para que lo almacene*/}
                    <button className="btn btn-primary"
                        onClick={() => onAddProduct ({id, name, description, price})}>agregar</button>
                </div>
            </div>

        </>
    )
}