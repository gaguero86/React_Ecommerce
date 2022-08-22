import React, { useEffect, useState} from 'react';
import ItemDetail from "./ItemDetail";
import Spinner from "../Spinner";
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const ItemCategoryContainer = () => {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const { category } = useParams();

  useEffect(() => {
    setLoading(true);

    const db = getFirestore();
    const itemDoc = doc(db, "items", category);
    getDoc(itemDoc).then((snapshot) => {
      setItem({ ...snapshot.data(), category: snapshot.category });
      setLoading(false);
     console.log(snapshot.data(), category);
    });
  }, [category]);
  return loading ? <Spinner /> : <ItemDetail item={item} />;
}; 


/* import { useParams } from 'react-router-dom';

const ItemCategoryContainer = () => {
  const { name } = useParams();
  return (
    `Hola mundo desde ${name}`

  )
} */

export default ItemCategoryContainer;

