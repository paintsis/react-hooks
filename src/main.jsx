import React from 'react'
import ReactDOM from 'react-dom/client'
import { CounterApp } from './01-useState/CounterApp'
//import { CounterwithCustomHook } from './01-useState/CounterwithCustomHook'
//import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
//import { MultipleCustomHook } from './03-examples/MultipleCustomHook'
//import {FocusScreen} from './04-useRef/focusScreen'
//import { Layout } from './05-useLayoutEffect/Layout'
//import { CallbackHook } from './06-memos/CallbackHook'
import { Padre } from './07-tarea-memo/Padre'
//import { Memorize } from './06-memos/Memorize'
//import { SimpleForm } from './02-useEffect/SimpleForm'
//import { HooksApp } from './HooksApp'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Padre/>
  </React.StrictMode>
)
