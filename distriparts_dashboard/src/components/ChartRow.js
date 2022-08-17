import React from 'react';


function ChartRow(props){
    return (
                <tr>
                    <td>{props.nombre}</td>
                    <td>{props.descripcion}</td>
                    <td>
                        <ul>
                            {props.categoria.nombreCategoria}
                        </ul>
                    </td>
                    <td>
                    <img className="w-25 text-align=center" src={`http://localhost:5001/images/${props.imagen}`} alt="Digital House"/>
                    </td>
                </tr>
            )
    }
    
        

export default ChartRow;