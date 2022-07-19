import { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import data from "./utils/data";

/* const ItemListContainer = ({greeting}) => {
    const onAddItem = (count) => {
        alert( `${count} El item fue agregado al carrito`);
    };
    return <ItemCount stock={10} initial={1} onAdd={onAddItem}></ItemCount> ;
} */
 
const ItemListContainer = () => {
    const [items, setItems ] = useState ([]);
    useEffect( () => {
        setItems(data);
        }, []);
    return(
        <>
        <div className="mt-5">
            <ItemList items={items}/>
        </div>
        </>
    );
};
export default ItemListContainer;