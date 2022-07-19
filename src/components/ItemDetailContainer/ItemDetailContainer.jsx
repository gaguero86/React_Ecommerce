/* import React from "react";
import {useParams} from "react-router-dom"
import { useEffect } from "react";
import { useState } from "react";
import ItemDetail from "./ItemDetail";
import data from "./utils/data";


const ItemDetailContainer = () => {
  const param = useParams();
  const [item, setItem]= useState ("")
      useEffect(()=>{
        let promiseDescription = new Promise((res, rej)=>{
          setTimeout(() => {
              res(data[param.id - 1])
          }, 2000);
        });
        promiseDescription.then((response)=>{
            setItem(response);
        })
      });
  return <ItemDetail item={item} />;
};

export default ItemDetailContainer; */

import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import data from "../utils/data";

function getItem () {
  return new Promise ((resolve, reject)=> {
    setTimeout (()=> {
      resolve(data); 
    },2000);
  });
}

const ItemListContainer = () => {
    const [Item, setItem ] = useState ([]);
    useEffect( () => {
      getItem ().then( respuestaPromise => {   //Agregue la promesa
        setItem(respuestaPromise [data]);
      })
        }, []);
    return(
        <>
        <div className="mt-5">
            <ItemDetail Item={Item}/>
        </div>
        </>
    );
};
export default ItemListContainer;