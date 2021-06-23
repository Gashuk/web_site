import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserStore from "./store/UserStore";
import CompositionStore  from "./store/CompositionStore";
import TableStore from "./store/TableStore";

export const Context = createContext(null)
// console.log(process.env.REACT_APP_API_URL)

ReactDOM.render(
    <Context.Provider value={{
        user: new UserStore(),
        composition: new CompositionStore(),
        table: new TableStore()
    }} >
        <App />
    </Context.Provider>,
  document.getElementById('root')
);


