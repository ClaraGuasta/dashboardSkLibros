import React, {useState, useEffect} from 'react';

function ListaProductos() {
    const [productList, setProductList] = useState([]);
    useEffect(() => {
      fetch("http://localhost:3030/api/products")
        .then((respuesta) => respuesta.json())
        .then((data) => {
            setProductList(data.data.productos.productos);
        });
    }, []);

    return (
      
        <div className='listaProductos'>
        <h2 className="titulo">Listado de productos</h2>
        <table className="tabla">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Descuento</th>
                </tr>
            </thead>
            <tbody>
               { productList.map(producto => {
                   return(
                <tr key={producto.id}>
                    <td>{producto.id}</td>
                    <td>{producto.nombre}</td>
                    <td>${producto.precio}</td>
                    <td>% {producto.descuento}</td>
                </tr>
                   )
               }) }
                
            </tbody>
        </table>

    </div>

    )
}

export default ListaProductos;