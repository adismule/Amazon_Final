// import React, { useEffect, useState } from 'react'
// import classes from './Results.module.css'
// import Layout from '../../Components/Layout/Layout'
// import { useParams } from 'react-router-dom'
// import axios from 'axios'
// import ProductCard from '../../Components/Product/ProductCard'
// import { productUrl } from '../../Api/EndPoints'
 

// function Results() {
//   const [results, setResults] = useState()
//   const [isLoading, setisLoading] =useState(false)
  
//   const {categoryName} = useParams()
//   useEffect(()=>{
//     setisLoading(true)
//     axios.get(`${productUrl}/products/category/${categoryName}`)
//     .then((res)=>{
//     setResults(res.data)
//     console.log(res.data)
//   }).catch((err)=>{
//     console.log(err)
//     setisLoading(false)
//   })
// }, [categoryName])
  
//   return (
//     <Layout>
//         <section>
//           <h1 style={{padding: "30px"}}>Results</h1>
//           <p style={{padding: "30px"}}>Category/ {categoryName}</p>
//           <hr />
//           <div className={classes.products_container}>
//             {results?.map((product)=>(
//               <ProductCard key={product.id}
//               product = {product}
//               renderDesc={false}
//               renderAdd={true}
//               />
//             ))}

//           </div>
//         </section>
//     </Layout>
    
//   )
// }

// export default Results;

import React, { useEffect, useState } from 'react';
import classes from './Results.module.css';
import Layout from '../../Components/Layout/Layout';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductCard from '../../Components/Product/ProductCard';
import { productUrl } from '../../Api/EndPoints';

function Results() {
  const [results, setResults] = useState([]); // ✅ initialized as empty array
  const [isLoading, setIsLoading] = useState(false); // ✅ lowercase consistency

  const { categoryName } = useParams();

  useEffect(() => {
    setIsLoading(true);
    axios.get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        // console.log(res.data)
        setResults(res.data);
        setIsLoading(false); // ✅ stop loading after success
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false); // ✅ stop loading after error
      });
  }, [categoryName]);

  return (
    <Layout>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category/ {categoryName}</p>
        <hr />
        <div className={classes.products_container}>
          {isLoading ? (
            <p>Loading...</p> // ✅ Show loading message
          ) : results.length === 0 ? (
            <p>Opps! No products found for "{categoryName}".</p> // ✅ Handle empty category
          ) : (
            results.map((product) => (
              <ProductCard
                key={product.id} // ✅ ensure key is unique
                product={product}
                renderDesc={false}
                renderAdd={true}
              />
            ))
          )}
        </div>
      </section>
    </Layout>
  );
}

export default Results;
