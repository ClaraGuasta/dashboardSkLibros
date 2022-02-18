import { useState, useEffect } from "react";

function LastProduct() {
  const [productList, setproductList] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3030/api/products/last")
      .then((respuesta) => respuesta.json())
      .then((data) => {
        console.log(data.data.producto[0]);
        setproductList(data.data.producto[0]);
      });
  }, []);

  return (
    <div className="lastProduct">
      <div className="lastProduct-conteiner">
        <div className="">
          <h5 className="lastProduct-titulo">Último producto creado</h5>
          <h5 className="lastProduct-titulo">{productList.nombre}</h5>
        </div>
        <div className="lastProduct-imagenYtexto">
          <img
            className=""
            style={{ width: 15 + "rem" }}
            src={`http://localhost:3030/api/products/image/${productList.imagen}`}
            alt="Libro"
          />

          <p>{productList.descripcion}</p>
          <a className="lastProduct-btn" target="" rel="" href="/">
            Ver Detalle
          </a>
        </div>
      </div>
    </div>
  );
}

export default LastProduct;
