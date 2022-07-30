import { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import data from "./utils/data";
import Spinner from "./Spinner";
import { useParams } from "react-router-dom";


/* const ItemListContainer = () => {
    const { name } = useParams();
    const [items, setItems ] = useState ([]);
    const [loading, setLoading] = useState(false);
    useEffect( () => {
        let promiseItems = new Promise (( resolve, reject) => {
            setTimeout(() => {
                resolve(data);
            }, 
            2000);
        }); */
        /*mock */
        /* promiseItems.then(
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
export default ItemListContainer; */

const ItemListContainer = () => {
    const { name } = useParams();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const promise = new Promise((resolve) => {
      setTimeout(() => resolve(data), 2000);
    });
  
    useEffect(() => {
      setLoading(true);
      promise.then((res) => {
        const products = res;
        if (name) {
          setItems(products.filter((product) => product.category == name));
        } else {
          setItems(products);
        }
        setLoading(false);
      });
    }, [name]);
  
    if (loading) return <Spinner />;
  
    return (
      <>
        <div className="mt-5">
          <ItemList items={items} />
        </div>
      </>
    );
  };
  
  export default ItemListContainer;
  