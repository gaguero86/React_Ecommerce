import React, { useEffect, useState} from 'react';
import ItemDetail from "./ItemDetail";
import data from "../utils/data";
import Spinner from "../Spinner";
import { useParams } from 'react-router-dom';

function getItem () {
  return new Promise ((resolve, reject)=> {
    setTimeout (()=> {
      resolve(data); 
    },2000);
  });
}

const ItemDetailContainer = () => {
    const [Item, setItem ] = useState ([]);
    const [loading, setLoading] = useState(false);
    const params = useParams ();
    useEffect( () => {
      setLoading(true);
      getItem ().then( respuestaPromise => {   //Agregue la promesa
        setItem(respuestaPromise [data]);
        setLoading(false)
      })
        }, []);
    return loading ? <Spinner/> : <ItemDetail Item={Item}/>;
/*     (
        <>
        <div className="mt-5">
            <ItemDetail Item={Item}/>
        </div>
        </>
    ); */
};
export default ItemDetailContainer;