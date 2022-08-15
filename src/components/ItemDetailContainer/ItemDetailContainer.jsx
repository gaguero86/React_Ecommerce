import React, { useEffect, useState} from 'react';
import ItemDetail from "./ItemDetail";
import dataDetail from "../utils/datadetail"; //cambien la data.
import Spinner from "../Spinner";
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  /* const params = useParams();
  console.log(params);
  const promise = new Promise((res, rej) => {
    setTimeout(() => res(dataDetail), 2000);
  }); */

  useEffect(() => {
    setLoading(true);
/*     promise.then((response) => {
      const foundItem = response.filter((item) => item.id == params.id);
      setItem(foundItem[0]);
      setLoading(false);
    }); */
    const db = getFirestore();
    const itemDoc = doc(db, "detalles", id);
    getDoc(itemDoc).then((snapshot) => {
      setItem({ ...snapshot.data(), id: snapshot.id });
      setLoading(false);
     console.log(snapshot.data(), id);
    });
  }, [id]);
  return loading ? <Spinner /> : <ItemDetail item={item} />;
};

export default ItemDetailContainer;
