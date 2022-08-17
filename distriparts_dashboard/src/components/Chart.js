import React, { useEffect, useState } from 'react';
import ChartRow from './ChartRow';

function Chart (){
    const [product, setProducts] = useState();
    console.log(product);
  useEffect(() => {
    const allInfo = async () => {
      let resProducts = await fetch(`http://localhost:5001/api/products/`);
      let productsSaved = await resProducts.json();
      let products = productsSaved.products
      console.log(products);
      if (productsSaved.meta.totalPages !== 1) {
        let iniciador = 1;
        let totalPages = productsSaved.meta.totalPages;
        while (iniciador <= totalPages ) {
            iniciador ++;
            let resProduct2 = await fetch(`http://localhost:5001/api/products/?page=${iniciador}`);
            let productsSaved2 = await resProduct2.json();
            let pro =  productsSaved2.products
            products.push(...pro)
        }
        setProducts(products)
      }else{
      setProducts(products)
    }
    }
    allInfo();
  }, []);

    return (
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Detalle</th>
                                <th>Categoria</th>
                                <th>Imagen</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                        {product &&
                            product.map((row, i) => {
                                return <ChartRow {...row} key={i}/>
                            })
                            }
                        
                        </tbody>
                        
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Chart;
