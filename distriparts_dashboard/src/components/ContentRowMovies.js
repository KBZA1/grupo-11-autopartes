import React, { useState, useEffect } from "react";
import SmallCard from "./SmallCard";


function ContentRowMovies() {
    const [info, setInfo] = useState(null);
    const [products, setProducts] = useState();
    const [users, setUsers] = useState();
    const [categories, setCategories] = useState();


  useEffect(() => {

    const allInfo = async () => {
      let resProducts = await fetch(`http://localhost:5001/api/products/`);
      let productsSaved = await resProducts.json();
      


      // title.push("Total de productos");
      // setTitle(title);
      // color.push("warning");
      // setColor(color);
      //   return products;

      let resUsers = await fetch(`http://localhost:5001/api/users/`);
      let usersSaved = await resUsers.json();
      

      setProducts({
        title: "Total de productos",
        quantity: productsSaved.meta.count,
        color: "warning",
        icon: "fa-clipboard-list"
      });
      setUsers({
        title: "Total de usuarios",
        quantity: usersSaved.meta.count,
        color: "primary",
        icon: "fa-users"
      });
      setCategories({
        title: "Total de categorías",
        quantity: productsSaved.meta.categoriesCount,
        color: "danger",
        icon: "fa-asterisk"
      });
    };

    allInfo();
  }, []);

  useEffect(() => {
    setInfo({ products, users, categories});
  }, [products, users, categories]);

  return (
    <div className="row">
      {info && 
        Object.values(info).map((category, i) => {
          return <SmallCard {...category} key={i} />;          
        })}
    </div>
  );
}

export default ContentRowMovies;
