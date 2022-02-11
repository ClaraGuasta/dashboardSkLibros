import React from 'react'
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

const Terror = {
    nombre: 'Terror',
    cantidad: 20,
    icono:'fa-skull-crossbones',
}
const Fantasía = {
    nombre: 'Fantasía',
    cantidad: 10,
    icono:'fa-ghost',
}
const Suspenso = {
    nombre: 'Suspenso',
    cantidad: 15,
    icono:'fa-skull',
}
const categorys = [Terror, Fantasía, Suspenso]
function Categorys(){
    return(
        <React.Fragment>
            <div style={panelCategory}>
                <h2 className='category-titulo'>Total de productos por género</h2>
            {
                categorys.map((categoria,index)=>{
                    return <IndividualCategory  {...categoria}  key={index}/>
                })
            }
            </div>
        </React.Fragment>
    )
}

export default Categorys