//componente que carga los proudctos y reenderiza cada uno de ellos en la pagina
import { useEffect, useState } from "react";
import { getProducts } from "../services/productsServices"
import { ProductCard } from "./ProductCard";

export const CatalogView = ({handler}) => {

    //llamamos a una funcion que recupera los productos. Y usamos useEfect para que se ejecute solo una vez cuando se carga la SPA

    const [products, setProducts] = useState ([]); //definimos el usestate para que guarde los valores de los productos y lo inicializamos como un array vacio por medio de []

    //ahora cargamos los valores en "products" llamando a la funcion getProducts 
    useEffect( () => 
        {   
            setProducts (getProducts);
        }, []
    );


    return (
        <>
            <div className="row">
            {/* Para reenderizar la estructura html en base a la estructura de datos del usestate products usamos .map*/}
            {/*y dentro de los parentesis despues de => ponemos el codigo html a reenderizar */}
                {products.map (prod => (
                    <div className="col-4 my-2" 
                        key={ prod.id }>
                        <ProductCard 
                            handler= {handler}
                            id = { prod.id }
                            name={ prod.name } 
                            description={ prod.description } 
                            price={ prod.price }
                        />
                     </div>
                ))}
            </div>
       
        </>
    )
}