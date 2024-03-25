import { AddProductCart, UpDateQuantityProductCart, DeleteProductCart } from "./itemsActions";

//cuando el state lo definimos igualado a [] le indicamos que state es del tipo arreglo
export const itemsReducer = (state = [], action) => {
    switch (action.type) {
        case AddProductCart:
            return [
                ...state,
                {
                    product: action.payload,
                    quantity: 1,
                }
            ];
    
        case UpDateQuantityProductCart:
            return state.map ( (i) => {
                if (i.product.id === action.payload.id) {
                    return {
                        ...i,
                        quantity: i.quantity + 1,
                    }
                }
                return i; //usamos return para devolver el cambio dentro del arreglo
            });
            
        case DeleteProductCart:
            return [
                ...state.filter ( (i) => i.product.id !== action.payload)
            ];
            
        default:
            return state;
    }

}