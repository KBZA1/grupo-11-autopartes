
import React, { useState, useEffect } from "react";


function GenresInDb() {
  //const [info, setInfo] = useState(null);
  const [categoryCount, setCategories] = useState();
  
  /* console.log(info); */
  useEffect(() => {
    const allInfo = async () => {
      let resProducts = await fetch(`http://localhost:5001/api/products/`);
      let productsSaved = await resProducts.json();
      let countByCategories = productsSaved.meta.countByCategory;
      let categoria = {};
    
      console.log(categoria);
      //console.log(categoria);
      for (const key in countByCategories) {
        categoria[key] = key +" Cantidad: "+ countByCategories[key] 
        };
    
        
      
      //setNameCategories(nameByCategories);
      setCategories(categoria);
      
      
    }
    allInfo();
  }, []);
  
/*   useEffect(()=>{
    setInfo({categoryCount});
  }, [categoryCount]);
 */
    return (
      <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Todas las Categorias        
            </h5>
          </div> 
          <div className="card-body">
            <div className="row">
              <div className="col-lg-6 mb-4">
                <div className="card bg-dark text-white shadow">
                {  categoryCount && <div className="card-body">   {categoryCount["Arbol de Leva"]} </div>}
                </div>
              </div>
              <div className="col-lg-6 mb-4">
                <div className="card bg-dark text-white shadow">
                {  categoryCount && <div className="card-body">   {categoryCount.Biela}</div>}
                </div>
              </div>
              <div className="col-lg-6 mb-4">
                <div className="card bg-dark text-white shadow">
                {  categoryCount &&<div className="card-body">   {categoryCount["Tapa de cilindro"]}</div>}
                </div>
              </div>
              <div className="col-lg-6 mb-4">
                <div className="card bg-dark text-white shadow">
                {  categoryCount && <div className="card-body">   {categoryCount["Bomba de aceite"]}</div>}
                </div>
              </div>
              <div className="col-lg-6 mb-4">
                <div className="card bg-dark text-white shadow">
                {  categoryCount && <div className="card-body">   {categoryCount["Enfriador de aceite"]}</div>}
                </div>
              </div>
                </div>
              </div>
            </div>
          </div>
    );
}

export default GenresInDb;
