import React from "react";
import { AppUI } from "./AppUI";
import {TodoProvider} from "../TodoContext";
// import './App.css';

// const defaultTodos= [
//   {text:'aprender react', completed:false},
//   {text:'aprender crud ren react', completed:false},
//   {text:'trabajar react con spring', completed:false},
//   {text:'crud con react y spring', completed:true}
// ];

function App() {

  return (
    <TodoProvider>
      <AppUI /> 
    </TodoProvider>
    );
}

export default App;
