import React from 'react';


function ChartRow(props){
    return (
                <tr>
                    <td>{props.id}</td>
                    <td>{props.nombre}</td>
                    <td>{props.precio}</td>
                    <td>
                        <ul>
                            {props.Categories.map( (category,i) => 
                                <li key={`category ${i}`}>{category}</li>
                            )}
                        </ul>
                    </td>
                    <td>{props.descripcion}</td>
                </tr>
            )
    }
    
        

export default ChartRow;