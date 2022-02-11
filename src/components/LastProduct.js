import React from 'react';
import libro from '../assets/img/misery.jpg'
function LastProduct(){
    return(
        <div className="lastProduct">
            <div className="lastProduct-conteiner">
                <div className="">
                    <h5 className="lastProduct-titulo">Último producto creado</h5>
                </div>
                <div className="lastProduct-imagenYtexto">
                    
                        <img className="" style={{width: 15 +'rem'}} src={libro}  alt=" Star Wars - Mandalorian "/>
                    
                    <p>Misery es un relato obsesivo que sólo podía escribir Stephen King. Un escritor sufre un grave accidente y recobra el conocimiento en una apartada casa en la que vive una misteriosa mujer, corpulenta y de extraño carácter.
</p>
                    <a className="lastProduct-btn" target="" rel="" href="/">Ver Detalle</a>
                </div>
            </div>
        </div>
    )
}

export default LastProduct;
