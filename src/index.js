import React from "react";
import App from "./App";

//Libreria
import  ReactDOM from "react-dom/client";

//referencia al div con id root
const el= document.getElementById("root");

//react toma el control del elemento
//crear una raiz para mostrar componente en react
const root= ReactDOM.createRoot(el);

//creamos un componente

//Mostrar componente en panalla
root.render(<App/>)