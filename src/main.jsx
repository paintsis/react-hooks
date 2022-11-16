import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";

import { CounterApp } from './01-useState/CounterApp'
//import { CounterwithCustomHook } from './01-useState/CounterwithCustomHook'
//import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
//import { MultipleCustomHook } from './03-examples/MultipleCustomHook'
//import {FocusScreen} from './04-useRef/focusScreen'
//import { Layout } from './05-useLayoutEffect/Layout'
//import { CallbackHook } from './06-memos/CallbackHook'
//import { Padre } from './07-tarea-memo/Padre'
//import './08-useReducer/intro-reducer';
//import { TodoApp } from './08-useReducer/TodoApp';
import { MainApp } from './09-useContext/MainApp';
//import { Memorize } from './06-memos/Memorize'
//import { SimpleForm } from './02-useEffect/SimpleForm'
//import { HooksApp } from './HooksApp'
import './index.css'

 ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <MainApp/>
    </React.StrictMode>
  </BrowserRouter>
  
)
