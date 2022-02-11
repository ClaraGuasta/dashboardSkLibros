import React from 'react';

function ListaProductos() {
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
                <tr>
                    <td>2</td>
                    <td>El visitante</td>
                    <td>$ 2500</td>
                    <td>% 40</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>La sangre manda</td>
                    <td>$ 3149</td>
                    <td>% 10</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Billy Summers</td>
                    <td>$ 2799</td>
                    <td>% 20</td>
                </tr>
<tr>
                    <td>6</td>
                    <td>Despúes</td>
                    <td>$ 2399</td>
                    <td>% 20</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>It</td>
                    <td>$ 3500</td>
                    <td>% 30</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>La histria de Lisey</td>
                    <td>$ 2100</td>
                    <td>% 10</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Skeleton Crew</td>
                    <td>$ 4000 </td>
                    <td>% 40</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>El instituto</td>
                    <td>$ 2200</td>
                    <td>% 10</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>Misery</td>
                    <td>$ 2500</td>
                    <td>% 40</td>
                </tr>
                <tr>
                    <td>13</td>
                    <td>Dr. Sueño</td>
                    <td>$ 4500</td>
                    <td>% 30</td>
                </tr>
            </tbody>
        </table>

    </div>

    )
}

export default ListaProductos;