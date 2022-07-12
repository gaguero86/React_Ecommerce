import ItemCount from "./ItemCount";

const ItemListContainer = ({greeting}) => {
    const onAddItem = (count) => {
        alert( `${count} El item fue agregado al carrito`);
    };
    return <ItemCount stock={10} initial={1} onAdd={onAddItem}></ItemCount> ;
}
 
export default ItemListContainer;