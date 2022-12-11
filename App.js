import React, {useState} from 'react';
import Router from './app/navigation';
import Home from './app/screen/Home';
import AppContext from './app/utils/AppContext';

export default function App() {
  const [cartList, setcartList] = useState([]);
  return (
    <AppContext.Provider value={{cartList, setcartList}}>
      <Router />
    </AppContext.Provider>
  );
}
