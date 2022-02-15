import React, {useEffect, useState} from 'react'
import IndividualCategory from './IndividualCategory'

const panelCategory = {
    width: "40%",
    height:" 94%",
    backgroundColor: "rgba(140, 27, 27, 0.7)",
    marginLeft:" 10%",
    borderRadius:" 10px",
    display: "flex",
    paddingBottom: "30px",
    flexDirection:" column",
    alignItems: "center",
    boxShadow: "rgb(104 104 104) 5px 5px 5px",
}

function Categorys(){
    const [categoryFantasia, setcategoryFantasia] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3030/api/genres")
      .then((respuesta) => respuesta.json())
      .then((data) => {
        setcategoryFantasia(data.data.generos.generos[0].productos.length);
      });
  }, []);
  const [categoryTerror, setcategoryTerror] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3030/api/genres")
      .then((respuesta) => respuesta.json())
      .then((data) => {
        setcategoryTerror(data.data.generos.generos[1].productos.length);
      });
  }, []);
  const [categorySuspenso, setcategorySuspenso] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3030/api/genres")
      .then((respuesta) => respuesta.json())
      .then((data) => {
        setcategorySuspenso(data.data.generos.generos[2].productos.length);
      });
  }, []);
    return(
        <React.Fragment>
            <div style={panelCategory}>
                <h2 className='category-titulo'>Total de productos por género</h2>
           <IndividualCategory total={categoryFantasia} titulo="Fantasía" icono='fa-ghost' />
           <IndividualCategory total={categoryTerror} titulo="Terror" icono='fa-skull-crossbones'/>
           <IndividualCategory total={categorySuspenso} titulo="Suspenso" icono='fa-skull' />
            </div>
        </React.Fragment>
    )
}

export default Categorys