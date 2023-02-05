import React from "react";
import { urlFor } from "../lib/client";

const Product = ({ product: { id_prod, img1, nombre, precio } }) => {
  return (
    <div>
        <div>
          <img src={urlFor("images/"+img1)} width={250} height={250} />
          <p>{nombre}</p>
          <p>{precio}</p>
        </div>
    </div>
/*
{articulos.length === 0 && <p>No tenemos artículos</p>}
      {articulos.length > 0 && articulos.map((articulo, index) => (
        <articulo key={index}>
          <img src={pathimg+articulo.img1} />
          <p>{articulo.nombre}</p>
        </articulo>
      ))}
*/
  );
};

export default Product;
