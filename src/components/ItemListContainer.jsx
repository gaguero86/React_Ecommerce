import { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import data from "./utils/data";
import Spinner from "./Spinner";
import { useParams } from "react-router-dom";
import {getFirestore, collection, getDocs} from "firebase/firestore"


const ItemListContainer = () => {
    const { name } = useParams();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
/*     const promise = new Promise((resolve) => {
      setTimeout(() => resolve(data), 2000);
    }); */

    useEffect(() => {
      setLoading(true);

      const db = getFirestore();
      const itemsCollection = collection(db, "items");
      getDocs(itemsCollection).then((snapshot) =>{
        const data= snapshot.docs.map((doc)=>({id:doc.id, ...doc.data()}));
        setItems(data);
        setLoading(false);
      });
/*       promise.then((res) => {
        const products = res;
        if (name) {
          setItems(products.filter((product) => product.category == name));
        } else {
          setItems(products);
        }
        setLoading(false);
      }); */
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
  