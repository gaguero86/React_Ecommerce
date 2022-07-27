import { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import data from "./utils/data";
import Spinner from "./Spinner";
import { useParams } from "react-router-dom";

/* const ItemListContainer = ({greeting}) => {
    const onAddItem = (count) => {
        alert( `${count} El item fue agregado al carrito`);
    };
    return <ItemCount stock={10} initial={1} onAdd={onAddItem}></ItemCount> ;
} */



const ItemListContainer = () => {
    const { name } = useParams();
    const [items, setItems ] = useState ([]);
    const [loading, setLoading] = useState(false);
    useEffect( () => {
        let promiseItems = new Promise (( resolve, reject) => {
            setTimeout(() => {
                resolve(data);
            }, 
            2000);
        });
        /*mock */
        promiseItems.then(
            (respuesta) => {
                setItems(data);
            }
            ).catch(
                (errorMsg) => console.error (errorMsg)
                )
    }, [name]);
    if (loading) return <Spinner />;

    return(
        <>
        <div className="mt-5">
            <ItemList items={items}/>

        </div>
        </>
    );
};
export default ItemListContainer;