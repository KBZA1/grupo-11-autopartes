import React, { useState, useEffect } from "react";
//import { Link } from "react-router-dom";
//import imagenFondo from '../assets/images/mandalorian.jpg';

function LastMovieInDb(){
    const [products, setProduct] = useState();
    useEffect(() => {
        const getInfo = async () => {
          let resProduct = await fetch(`http://localhost:5001/api/products`);
          let productSaved = await resProduct.json();
         
          let lastProduct = productSaved.products.slice(-1);
          setProduct(lastProduct);
        };
        getInfo();
      }, []);
    return(
        <React.Fragment>
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
            <div className="card-header py-3">
                   {products && ( <h5 className="m-0 font-weight-bold text-gray-800">{products[0].nombre}</h5> )}
                </div>
                <div className="card-body">
                 <div className="text-center">
                 {products && ( <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} 
                        src= {`http://localhost:5001/images/${products[0].imagen}`}
                        alt=""/>)}
                    </div> 
                    {products && (<p>{products[0].descripcion}</p> )}
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Ultimo</a>
                    
                </div>
            </div>
        </div>
        </React.Fragment>
    )
}
export default LastMovieInDb;