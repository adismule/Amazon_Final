// import React, { createContext, useReducer } from "react";


// export const DataContext = createContext()

// export const DataProvider = ({Children, reducer, initialState})=>{
//     return (
//         <DataContext.Provider value={useReducer(reducer, initialState)}>
//             {Children}
//         </DataContext.Provider>
//     )
// }


// import React, { createContext, useReducer } from 'react';
// import { initialState, reducer } from "../../Utility/reducer";

// export const DataContext = createContext();

// export const DataProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, initialState);
  

//   return (
//     <DataContext.Provider value={{ ...state, dispatch }}>
//       {children}
//     </DataContext.Provider>
//   );
// };

// src/Components/DataProvider/DataProvider.jsx
// import React, { createContext, useReducer, useContext } from 'react';

// export const DataContext = createContext();

// export const DataProvider = ({ reducer, initialState, children }) => (
//   <DataContext.Provider value={useReducer(reducer, initialState)}>
//     {children}
//   </DataContext.Provider>
// );

// // Optional: for cleaner use
// export const useData = () => useContext(DataContext);

import React, { createContext, useReducer } from 'react';
import { initialState, reducer } from '../../Utility/reducer';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};