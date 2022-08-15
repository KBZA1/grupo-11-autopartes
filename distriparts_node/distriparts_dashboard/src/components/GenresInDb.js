
import React, { useState, useEffect } from "react";
import CategoriesCount from "./CategoriesCount";

function GenresInDb() {
  const [info, setInfo] = useState(null);
  const [categoryCount, setCategories] = useState();
  const [categories, setCategoriesName] = useState();
  console.log(info);
  useEffect(() => {
    const allInfo = async () => {
      let resProducts = await fetch(`http://localhost:5001/api/products/`);
      let productsSaved = await resProducts.json();
      let nameByCategories = Object.getOwnPropertyNames(productsSaved.meta.countByCategory);
      let countByCategories = productsSaved.meta.countByCategory;
    
      //setNameCategories(nameByCategories);
      setCategories(countByCategories);
      setCategoriesName(nameByCategories);
      
    }
    allInfo();
  }, []);
  
  useEffect(()=>{
    setInfo({categoryCount,categories});
  }, [categoryCount,categories]);

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
                { categories && categoryCount && <div className="card-body"> {categories.[0]} Cantidad: {categoryCount.["Arbol de Leva"]} </div>}
                </div>
              </div>
              <div className="col-lg-6 mb-4">
                <div className="card bg-dark text-white shadow">
                { categories && categoryCount && <div className="card-body"> {categories.[1]} Cantidad: {categoryCount.["Biela"]}</div>}
                </div>
              </div>
              <div className="col-lg-6 mb-4">
                <div className="card bg-dark text-white shadow">
                { categories && categoryCount &&<div className="card-body"> {categories.[2]} Cantidad: {categoryCount.["Bomba de aceite"]}</div>}
                </div>
              </div>
              <div className="col-lg-6 mb-4">
                <div className="card bg-dark text-white shadow">
                { categories && categoryCount && <div className="card-body"> {categories.[3]} Cantidad: {categoryCount.["Enfriador de aceite"]}</div>}
                </div>
              </div>
              <div className="col-lg-6 mb-4">
                <div className="card bg-dark text-white shadow">
                { categories && categoryCount && <div className="card-body"> {categories.[4]} Cantidad: {categoryCount.["Tapa de cilindro"]}</div>}
                </div>
              </div>
                </div>
              </div>
            </div>
          </div>
    );
}

export default GenresInDb;
