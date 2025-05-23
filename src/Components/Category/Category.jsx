import React from 'react'
import { categoryInfo } from './CategoryFullInfo'
import CategoryCard from './CategoryCard'

function Category() {
  return (
    <section>
        {
categoryInfo.map((infos)=>{
    <CategoryCard data = {infos}/>
})
        }
    </section>
  )
}

export default Category

// import React from 'react'
// import { categoryInfo } from './CategoryFullInfo'
// import CategoryCard from './CategoryCard'

// function Category() {
//     return (
//       <section>
//         {categoryInfo.map((infos, index) => (
//           <CategoryCard key={index} data={infos} />
//         ))}
//       </section>
//     );
//   }
