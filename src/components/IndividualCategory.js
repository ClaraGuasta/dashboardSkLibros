import React from 'react'

const individualCategory = {
    width: '74%',
    height: '120px',
    backgroundColor: '#D9D9D9',
    margin: '10px',
    marginLeft: '17px',
    borderRadius: '10px',
    padding: '10px',
    boxShadow: '#C3C4C4 5px 5px ',
}
const display = {
    display: 'flex',
    flexDirection: 'row',
    margin: '10px',
    justifyContent: 'space-around',
    color: 'rgba(140, 27, 27, 0.9)',
}
const cantidad = {
    textAlign: 'center',
    color: '#484A49',
}

function IndividualCategory (props){
    return(
        <React.Fragment>
            <div style={individualCategory}>
                <div style={display}>
                    <i className={`fas ${props.icono} fa-2x fa-solid`}></i>
                    <h3>{props.nombre}</h3>
                </div>
                <div>
                    <h2 style={cantidad}>{props.cantidad}</h2>
                </div>
            </div>
        </React.Fragment>
    )
}

export default IndividualCategory
