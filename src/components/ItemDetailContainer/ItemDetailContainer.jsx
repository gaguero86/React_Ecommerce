import React, { useEffect, useState} from 'react';
import ItemDetail from "./ItemDetail";
import dataDetail from "../utils/datadetail"; //cambien la data.
import Spinner from "../Spinner";
import { useParams } from 'react-router-dom';

/* function getItem () {
  return new Promise ((resolve, reject)=> {
    setTimeout (()=> {
      resolve(dataDetail); 
    },2000);
  });
}

const ItemDetailContainer = () => {
    const [item, setItem ] = useState ([]);
    const [loading, setLoading] = useState(false);
    const params = useParams ();
    useEffect( () => {
      setLoading(true);
      getItem ().then( respuestaPromise => {   //Agregue la promesa
        const foundItem = respuestaPromise.filter((item) => item.id == params.id);
        setItem(respuestaPromise [0]);
        setLoading(false)
      })
        }, []);

        return loading ? <Spinner /> : <ItemDetail item={item} />;
};
export default ItemDetailContainer; */

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(false);
  const params = useParams();
  console.log(params);
  const promise = new Promise((res, rej) => {
    setTimeout(() => res(dataDetail), 2000);
  });

  useEffect(() => {
    setLoading(true);
    promise.then((response) => {
      const foundItem = response.filter((item) => item.id == params.id);
      setItem(foundItem[0]);
      setLoading(false);
    });
  }, []);
  return loading ? <Spinner /> : <ItemDetail item={item} />;
};

export default ItemDetailContainer;
