import React, {createContext, useContext} from 'react';
import useFetchData from '../hooks/useFetchData';

const DataContext = createContext()

export const useDataContext = () => {
  return useContext(DataContext)
}

export const DataContextProvider = ({children}) => {
  const data = useFetchData()
  return <DataContext.Provider value={data} >
    {children}
  </DataContext.Provider>
}
